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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 17h18v2H3v-2zm0-6h3v3H3v-3zm5 0h3v3H8v-3zM3 5h3v3H3V5zm10 0h3v3h-3V5zm5 0h3v3h-3V5zm-5 6h3v3h-3v-3zm5 0h3v3h-3v-3zM8 5h3v3H8V5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 17h18v2H3v-2zm0-6h3v3H3v-3zm5 0h3v3H8v-3zM3 5h3v3H3V5zm10 0h3v3h-3V5zm5 0h3v3h-3V5zm-5 6h3v3h-3v-3zm5 0h3v3h-3v-3zM8 5h3v3H8V5z"/>
  {/if}
</svg>
