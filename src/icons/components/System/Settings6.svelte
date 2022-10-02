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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12l-4.346-7.526zM8.634 8.17l1.732-1 5 8.66-1.732 1-5-8.66z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zM8.634 8.17l5 8.66 1.732-1-5-8.66-1.732 1z"/>
  {/if}
</svg>
