<script lang="ts">
import { useResizeObserver } from "@web-std/svelte-common/src/hooks";
import { onDestroy, getContext } from "svelte";
import { twMerge } from "tailwind-merge";
import { Context, contextKey } from "./common";

const context = getContext<Context>(contextKey);
const columns = context.columns;
const footerHeight = context.footerHeight;

export let className = "transition-all";
export let coverClass = "backdrop-blur-md";
export let coverThreshold = 0.1;

let covered = false;

const attachObserver = useResizeObserver((e) => {
  footerHeight.set(e[0].contentRect.height);
});

onDestroy(() => footerHeight.set(0));

$: (() => {
  for (const box of $columns) {
    if (box.bottom >= $footerHeight * coverThreshold) {
      covered = true;
      return;
    }
  }
  covered = false;
})();
</script>

<div
  class={twMerge(
    "absolute bottom-0 w-full h-fit",
    className,
    covered ? coverClass : ""
  )}
  use:attachObserver
>
  <slot />
</div>
