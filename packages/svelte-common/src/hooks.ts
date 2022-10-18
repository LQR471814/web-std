import { onDestroy } from "svelte"

export function useKey(key: string, callback: (e: KeyboardEvent) => void) {
  const handler = (e: KeyboardEvent) => {
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
