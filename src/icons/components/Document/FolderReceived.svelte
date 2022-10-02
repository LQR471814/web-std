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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-2 4h3v2h-3v3.5L15 18l5-4.5V17z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M22 13.126A6 6 0 0 0 13.303 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7.126zM20 17h3v2h-3v3.5L15 18l5-4.5V17z"/>
  {/if}
</svg>
