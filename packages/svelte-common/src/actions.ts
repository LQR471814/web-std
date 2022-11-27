import type { Readable } from "svelte/store"
import { randomString } from "@web-std/common/src/general"

export type ResizeOptions = (node: HTMLElement, w: number, h: number) => void

export function resize(node: HTMLElement, options: ResizeOptions) {
  const observer = new ResizeObserver(() => {
    options(node, node.clientWidth, node.clientHeight)
  })

  observer.observe(node)
  options(node, node.clientWidth, node.clientHeight)

  return {
    update(o: () => void) {
      options = o
    },
    destroy() {
      observer.disconnect()
    }
  }
}

export type PropertyOnSizeOptions = {
  [key in keyof CSSStyleDeclaration]+?: {
    axis: "x" | "y"
    compare: "greater" | "lesser"
    value: CSSStyleDeclaration[key]
    threshold: number | (() => number)
  }
}

export function propertyOnSize(
  node: HTMLElement, options: PropertyOnSizeOptions
) {
  const observer = new ResizeObserver(() => {
    for (const property in options) {
      const value = options[property]?.axis === "x" ?
        node.clientWidth :
        node.clientHeight

      const threshold = (typeof options[property]?.threshold) === "number" ?
        options[property]?.threshold as number :
        (options[property]?.threshold as (() => number))()

      if (options[property]?.compare === "greater" ?
        value > threshold :
        value < threshold
      ) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        node.style[property] = options[property]!.value
        continue
      }
      node.style[property] = ""
    }
  })
  observer.observe(node)
  return {
    update(o: PropertyOnSizeOptions) {
      options = o
    },
    destroy() {
      observer.disconnect()
    }
  }
}

export type ClickOutsideOptions = {
  callback: () => void
  axis?: (e: HTMLElement) => Element
}

export function clickOutside(initial: HTMLElement, options: ClickOutsideOptions) {
  let node = options.axis?.(initial) ?? initial

  const key = `clickoutside-${randomString(8)}`
  node.setAttribute(key, "true")

  const handler = (e: MouseEvent) => {
    if (!e.target) return
    let current = e.target as HTMLElement
    while (current.parentElement !== null) {
      current = current.parentElement
      if (current.getAttribute(key) === "true") {
        return
      }
    }
    options.callback()
  }

  setTimeout(() => {
    document.body.addEventListener("click", handler)
  }, 200)

  return {
    update(o: ClickOutsideOptions) {
      options = o
      node = o.axis?.(node as HTMLElement) ?? node
    },
    destroy() {
      node.removeAttribute(key)
      document.body.removeEventListener("click", handler)
    }
  }
}

export type PlayingOptions = {
  store: Readable<boolean>
}

export function controlPlay(node: HTMLMediaElement, options: PlayingOptions) {
  const unsubscribe = options.store.subscribe(isPlaying => {
    if (isPlaying) {
      node.play()
      return
    }
    node.pause()
  })

  return {
    update(o: PlayingOptions) {
      options = o
    },
    destroy() {
      unsubscribe()
    }
  }
}

export type SafePaddingOptions = {
  sides: ("left" | "top" | "bottom" | "right")[],
}

export function safePadding(
  node: HTMLElement,
  options: SafePaddingOptions
) {
  const style = window.getComputedStyle(node)
  for (const side of options.sides) {
    const styleString = `padding${side[0].toUpperCase() + side.slice(1)}` as `padding${Capitalize<typeof side>}`
    node.style[styleString] = `max(${style[styleString]}, env(safe-area-inset-${side}))`
  }
  return {
    update(o: SafePaddingOptions) {
      options = o
    }
  }
}
