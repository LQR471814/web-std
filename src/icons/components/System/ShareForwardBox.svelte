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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm9.95 2L16 2.05 17.414.636l5.34 5.34A.6.6 0 0 1 22.33 7H14a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4h4.95z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7 2V1l7 6h-9a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4h2z"/>
  {/if}
</svg>
