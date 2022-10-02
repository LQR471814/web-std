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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 0 1 1 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 14a2 2 0 0 1 .15 3.995L21 21v-4zM19.5 5H4.511l7.55 6.662L19.5 5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 0 1 1 1v10.529A6 6 0 0 0 12.34 21L3.002 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 14a2 2 0 0 1 .15 3.995L21 21v-4zM5.647 6.238L4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.438-6.413-5.444z"/>
  {/if}
</svg>
