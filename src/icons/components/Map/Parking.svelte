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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M6 3h7a6 6 0 1 1 0 12H8v6H6V3zm2 2v8h5a4 4 0 1 0 0-8H8z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M6 3h7a6 6 0 1 1 0 12h-3v6H6V3zm4 4v4h3a2 2 0 1 0 0-4h-3z"/>
  {/if}
</svg>
