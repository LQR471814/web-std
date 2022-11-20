import { onDestroy } from "svelte"

export function useKey(
  key: string, callback: (e: KeyboardEvent) => void,
  modifiers?: { shiftKey: boolean, ctrlKey: boolean, altKey: boolean, metaKey: boolean }
) {
  const handler = (e: KeyboardEvent) => {
    if (modifiers?.shiftKey === true && !e.shiftKey) return
    if (modifiers?.ctrlKey === true && !e.ctrlKey) return
    if (modifiers?.altKey === true && !e.altKey) return
    if (modifiers?.metaKey === true && !e.metaKey) return

    if (e.key === key) {
      callback(e)
    }
  }
  window.addEventListener("keydown", handler)
  onDestroy(() => window.removeEventListener("keydown", handler))
}

export function useClose(callback: (e: KeyboardEvent) => void) {
  useKey("Escape", callback)
}
