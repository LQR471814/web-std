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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M18 2a1 1 0 0 1 1 1v7h-2V4H7v16h5v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3zm2 6h-4v2h4v-2zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M18 2a1 1 0 0 1 1 1l.001 7.1A5.002 5.002 0 0 0 13.1 14H12v8H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3zm0 2c-.513 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1z"/>
  {/if}
</svg>
