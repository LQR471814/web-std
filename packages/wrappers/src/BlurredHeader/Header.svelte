<script lang="ts">
import { onMount, onDestroy, getContext } from "svelte";
import { twMerge } from "tailwind-merge";
import { Context, contextKey } from "./common";

const context = getContext<Context>(contextKey);
const columns = context.columns;
const headingHeight = context.headingHeight;

export let className = "transition-all";
export let coverClass = "backdrop-blur-md";
export let coverThreshold = 0.1;

let covered = false;
let headerWrapper: HTMLDivElement;

const observer = new ResizeObserver((e) => {
  headingHeight.set(e[0].contentRect.height);
});
onMount(() => observer.observe(headerWrapper));
onDestroy(() => observer.disconnect());

$: (() => {
  for (const scrolled of $columns) {
    if (scrolled >= $headingHeight * coverThreshold) {
      covered = true;
      return;
    }
  }
  covered = false;
})();
</script>

<div
  class={twMerge(
    "absolute top-0 w-full h-fit",
    className,
    covered ? coverClass : ""
  )}
  bind:this={headerWrapper}
>
  <slot />
</div>
