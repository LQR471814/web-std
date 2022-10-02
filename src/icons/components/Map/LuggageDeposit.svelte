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
    <path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v2h4c.552 0 1 .448 1 1v12h2v2H1v-2h2V7c0-.552.448-1 1-1h4V4c0-.552.448-1 1-1h6zM8 8H5v11h3V8zm6 0h-4v11h4V8zm5 0h-3v11h3V8zm-5-3h-4v1h4V5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0H24V24H0z"/><path d="M15 3c.552 0 1 .448 1 1v2h4c.552 0 1 .448 1 1v12h2v2H1v-2h2V7c0-.552.448-1 1-1h4V4c0-.552.448-1 1-1h6zm-5 5H8v11h2V8zm6 0h-2v11h2V8zm-2-3h-4v1h4V5z"/>
  {/if}
</svg>
