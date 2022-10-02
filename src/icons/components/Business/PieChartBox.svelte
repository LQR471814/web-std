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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm12.9 8A5.002 5.002 0 0 1 7 12a5.002 5.002 0 0 1 4-4.9V13h5.9zm0-2H13V7.1a5.006 5.006 0 0 1 3.9 3.9z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.9 10H11V7.1a5.002 5.002 0 0 0 1 9.9 5.002 5.002 0 0 0 4.9-4zm0-2A5.006 5.006 0 0 0 13 7.1V11h3.9z"/>
  {/if}
</svg>
