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
}

export function clickOutside(node: HTMLElement, options: ClickOutsideOptions) {
  const key = "clickoutside"
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
    window.addEventListener("click", handler)
  }, 200)

  return {
    update(o: ClickOutsideOptions) {
      options = o
    },
    destroy() {
      node.removeAttribute(key)
      window.removeEventListener("click", handler)
    }
  }
}
