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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M20 8V5H4v3h16zm0 2H4v9h16v-9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 11h6v2H6.5l4.5-4.5V14z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M22 7H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm0 2v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h20zm-11 5v-2.5L6.5 16H17v-2h-6z"/>
  {/if}
</svg>
