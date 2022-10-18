let touch: boolean | undefined
export function isTouch() {
  if (touch === undefined) {
    const mediaList = window.matchMedia("(pointer: coarse)")
    touch = mediaList.matches
    mediaList.onchange = (value) => {
      touch = value.matches
    }
  }
  return touch
}
