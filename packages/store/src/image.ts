import { createHash } from "sha1-uint8array"
import { imageFromBytes } from "@web-std/common/src/general"

export class ImageStore {
  store: {
    [key: string]: {
      url: string,
      references: number,
      timeout?: number
    }
  } = {}

  fetch(data: Uint8Array): string {
    const hash = createHash().update(data).digest("hex")
    if (!(hash in this.store)) {
      const url = imageFromBytes(data)
      this.store[hash] = {
        url: url,
        references: 0,
      }
    }
    this.store[hash].references++
    return this.store[hash].url
  }

  release(data: Uint8Array) {
    const hash = createHash().update(data).digest("hex")
    this.store[hash].references--
    if (this.store[hash].timeout) {
      clearTimeout(this.store[hash].timeout!)
    }
    this.store[hash].timeout = setTimeout(() => {
      if (this.store[hash].references === 0) {
        URL.revokeObjectURL(this.store[hash].url)
        delete this.store[hash]
      }
    }, 30000)
  }
}

export const imageStore = new ImageStore()
