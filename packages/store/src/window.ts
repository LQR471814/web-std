import { Readable, writable } from "svelte/store"

export function NewWindowSizeStore(): [Readable<[number, number]>, () => void] {
    const dimensions = writable<[number, number]>()

    const listener = () => {
        dimensions.set([window.innerWidth, window.innerHeight])
    }
    listener()

    window.addEventListener("resize", listener)
    const cleanup = () => window.removeEventListener("resize", listener)

    return [dimensions, cleanup]
}

export const [windowSize, _] = NewWindowSizeStore()
