import { imageFromBytes } from "./general"

export type Box = {
    min: [number, number],
    max: [number, number]
}
export type ImageSource = Uint8Array | string
export type ProcessingContext = {
    buffer: Uint8Array
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    image: HTMLImageElement
}

export async function handleSource(source: ImageSource): Promise<Uint8Array> {
    if (typeof source !== "string") {
        return source
    }

    const usePath = () => {
        const url = new URL(window.location.toString())
        url.pathname = source
        return url.toString()
    }

    const response = await window.fetch(
        source.startsWith("data:") ? source : usePath()
    )

    const buffer = await response.arrayBuffer()
    return new Uint8Array(buffer)
}

export async function processImage(
    source: ImageSource,
    callbacks: ((c: ProcessingContext) => void)[],
): Promise<Uint8Array[] | null> {
    const urls = await processImageRaw(source, callbacks)
    if (urls === null) {
        return null
    }
    const converted: Uint8Array[] = []
    for (const dataURL of urls) {
        const response = await window.fetch(dataURL)
        const bytes = new Uint8Array(await response.arrayBuffer());
        converted.push(bytes)
    }
    return converted
}

export async function processImageRaw(
    source: ImageSource,
    callbacks: ((c: ProcessingContext) => void)[],
): Promise<string[] | null> {
    const buffer = await handleSource(source)
    const bufferURL = imageFromBytes(buffer)

    const image = new Image()
    await new Promise(r => {
        image.onload = r
        image.src = bufferURL
    })

    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    if (!context) {
        return null
    }

    const results: string[] = []
    for (const callback of callbacks) {
        callback({ buffer, canvas, context, image })
        const dataURL = canvas.toDataURL("image/jpeg")
        results.push(dataURL)
    }

    URL.revokeObjectURL(bufferURL)
    return results
}

export async function resize(
    source: ImageSource,
    width?: number, height?: number,
    crop?: {
        min: [number, number],
        max: [number, number]
    }
) {
    const processed = await processImage(source, [({ image, context, canvas }) => {
        let w = image.width
        let h = image.height
        if (width !== undefined && height === undefined) {
            w = width
            h = width * (h / w)
        } else if (width === undefined && height !== undefined) {
            h = height
            w = height * (w / h)
        } else if (width !== undefined && height !== undefined) {
            w = width
            h = height
        }

        canvas.width = w
        canvas.height = h

        if (crop) {
            context.drawImage(
                image, crop.min[0], crop.min[1],
                crop.max[0] - crop.min[0],
                crop.max[1] - crop.min[1],
                0, 0, w, h
            )
            return
        }

        context.drawImage(
            image, 0, 0,
            width ?? image.width,
            height ?? image.height
        )
    }])
    if (processed) {
        return processed[0]
    }
    return null
}

export function width(box: Box) {
    return box.max[0] - box.min[0]
}

export function height(box: Box) {
    return box.max[1] - box.min[1]
}

export function position(
    position: [number, number],
    src: Box, dst: Box
): Box {
    const w = width(src)
    const h = height(src)

    const offset: [number, number] = [
        dst.min[0] + width(dst) / 2 - position[0] * w,
        dst.min[1] + height(dst) / 2 - position[1] * h,
    ]

    return {
        min: offset,
        max: [offset[0] + w, offset[1] + h]
    }
}

export function fit(mode: "contain" | "cover", src: Box, dst: Box): Box {
    const srcWidth = width(src)
    const srcHeight = height(src)

    const dstWidth = width(dst)
    const dstHeight = height(dst)

    const scaleX = dstWidth / srcWidth
    const scaleY = dstHeight / srcHeight

    let coveredScale = scaleY
    let containedScale = scaleX
    if (scaleX * srcHeight > dstHeight) {
        coveredScale = scaleX
        containedScale = scaleY
    }

    const scale = mode === "contain" ? containedScale : coveredScale
    return {
        min: [src.min[0] * scale, src.min[1] * scale],
        max: [src.max[0] * scale, src.max[1] * scale],
    }
}
