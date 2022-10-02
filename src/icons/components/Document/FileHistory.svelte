<script lang="ts">
  import { getContext } from "svelte/internal";
  import { Context, iconKey } from "~/icons/common";

  const context = getContext<Context>(iconKey)

  export let className = context.className
  export let width = context.width
  export let height = context.height
  export let x = context.x
  export let y = context.y
  export let type = context.type
</script>

<svg
  class={className}
  width={width}
  height={height}
  x={x}
  y={y}
>
  {#if type ?? "line" === "line"}
    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M16 2l5 5v13.993c0 .556-.445 1.007-.993 1.007H3.993C3.445 22 3 21.545 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm-1 2H5v16h14V8h-4V4zm-2 5v4h3v2h-5V9h2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M16 2l5 4.999v14.01c0 .547-.445.991-.993.991H3.993C3.445 22 3 21.545 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 7h-2v6h5v-2h-3V9z"/>
  {/if}
</svg>
