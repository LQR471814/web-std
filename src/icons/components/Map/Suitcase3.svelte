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
    <path fill="none" d="M0 0H24V24H0z"/><path d="M15 1c.552 0 1 .448 1 1v5h1V6h2v1h1c.552 0 1 .448 1 1v12c0 .552-.448 1-1 1h-1v1h-2v-1H7v1H5v-1H4c-.552 0-1-.448-1-1V8c0-.552.448-1 1-1h1V6h2v1h1V2c0-.552.448-1 1-1h6zm4 8H5v10h14V9zM9 10v8H7v-8h2zm4 0v8h-2v-8h2zm4 0v8h-2v-8h2zm-3-7h-4v4h4V3z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0H24V24H0z"/><path d="M15 1c.552 0 1 .448 1 1v5h1V6h2v1h1c.552 0 1 .448 1 1v12c0 .552-.448 1-1 1h-1v1h-2v-1H7v1H5v-1H4c-.552 0-1-.448-1-1V8c0-.552.448-1 1-1h1V6h2v1h1V2c0-.552.448-1 1-1h6zm-6 9H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm-3-7h-4v4h4V3z"/>
  {/if}
</svg>
