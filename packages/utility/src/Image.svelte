<script lang="ts">
import { imageStore } from "@web-std/store/image.ts";
import { classList } from "@web-std/common/general.ts";

export let image: Uint8Array;
export let alt: string;

export let fit: "contain" | "cover" | "fill" | "scale-down" | "none" =
  "contain";
export let className = "";

export let width: number | undefined;
export let height: number | undefined;

const src = imageStore.fetch(image);
</script>

<img
  {src}
  {alt}
  {width}
  {height}
  class={classList(`object-${fit}`, className)}
/>
