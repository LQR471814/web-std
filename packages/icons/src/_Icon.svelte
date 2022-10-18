<script lang="ts">
  import { getContext } from "svelte";
  import { Context, iconKey } from "./icon-context";

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
    [LINE_SVG_CONTENT]
  {:else if type === "fill"}
    [FILL_SVG_CONTENT]
  {/if}
</svg>
