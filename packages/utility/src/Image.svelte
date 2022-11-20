<script lang="ts">
import { afterUpdate, onDestroy } from "svelte";
import { imageStore } from "@web-std/store/src/image";
import { classList, styleList } from "@web-std/common/src/general";

export let image: Uint8Array;
export let alt: string;
export let className: string;

export let maxLength: number | undefined = undefined;
export let minLength: number | undefined = undefined;
export let side: "x" | "y" = "x";

let _root: HTMLDivElement;
let _container: HTMLDivElement;
let _image: HTMLImageElement;

let observer: ResizeObserver | undefined;

afterUpdate(async () => {
  await new Promise((r) => (_image.onload = r));

  if (!_image) {
    return
  }

  const widthRatio = _image.clientWidth / _image.clientHeight;
  const heightRatio = _image.clientHeight / _image.clientWidth;

  observer = new ResizeObserver(() => {
    if (!_image) return;

    const rx = (_image.clientHeight * widthRatio) / _root.clientWidth;
    const ry = (_image.clientWidth * heightRatio) / _root.clientHeight;
    if (
      ry > rx &&
      !_image.classList.contains("h-full") &&
      !_container.classList.contains("h-full")
    ) {
      _image.classList.remove("w-full");
      _image.classList.add("h-full");
      _container.classList.remove("w-full");
      _container.classList.add("h-full");
    } else if (
      rx > ry &&
      !_image.classList.contains("w-full") &&
      !_container.classList.contains("w-full")
    ) {
      _image.classList.remove("h-full");
      _image.classList.add("w-full");
      _container.classList.remove("h-full");
      _container.classList.add("w-full");
    }
  });

  observer.observe(_root);
});

onDestroy(() => observer?.disconnect());
</script>

<div
  bind:this={_root}
  class="flex justify-center items-center h-full"
  style={maxLength || minLength
    ? styleList({
        [side === "x" ? "minWidth" : "minHeight"]: minLength
          ? `${minLength}px`
          : undefined,
        [side === "x" ? "maxWidth" : "maxHeight"]: maxLength
          ? `${maxLength}px`
          : undefined,
      })
    : undefined}
>
  <div
    bind:this={_container}
    class={classList("relative overflow-hidden", className)}
  >
    <img bind:this={_image} src={imageStore.fetch(image)} {alt} />
    <slot />
  </div>
</div>
