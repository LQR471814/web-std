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
    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828c.375.375.586.884.586 1.414V17h2v2h-8.126c-.445 1.726-2.01 3-3.874 3-1.864 0-3.43-1.274-3.874-3H3c-.552 0-1-.448-1-1V5c0-1.105.895-2 2-2h10.172zM11 16c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm3.172-11H4v12h3.126c.444-1.725 2.01-3 3.874-3 1.864 0 3.43 1.275 3.874 3H19V9.828L14.172 5zM14 7v6H6V7h8zm-2 2H8v2h4V9z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828c.375.375.586.884.586 1.414V17h2v2h-8.126c-.445 1.726-2.01 3-3.874 3-1.864 0-3.43-1.274-3.874-3H3c-.552 0-1-.448-1-1V5c0-1.105.895-2 2-2h10.172zM11 16c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm3-9H6v6h8V7zm-2 2v2H8V9h4z"/>
  {/if}
</svg>
