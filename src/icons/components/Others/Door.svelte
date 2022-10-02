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
    <path fill="none" d="M0 0H24V24H0z"/><path d="M18 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h12zm-1 2H7v14h10V5zm-2 6v2h-2v-2h2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0H24V24H0z"/><path d="M18 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h12zm-4 8c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
  {/if}
</svg>
