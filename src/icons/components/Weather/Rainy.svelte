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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a7.998 7.998 0 0 1 6.98 4.087A6 6 0 1 1 17 18h-1zm-5.768.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M15.86 18l-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96A8.001 8.001 0 1 1 15.98 6.087 6 6 0 1 1 17 18h-1.139zm-5.628.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z"/>
  {/if}
</svg>
