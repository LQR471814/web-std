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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M21 14v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4zm-2 1.465A3.998 3.998 0 0 1 17 12c0-1.48.804-2.773 2-3.465V4H5v4.535C6.196 9.227 7 10.52 7 12c0 1.48-.804 2.773-2 3.465V20h14v-4.535zM9 6h6v2H9V6zm0 10h6v2H9v-2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M21 14v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4zM9 6v2h6V6H9zm0 10v2h6v-2H9z"/>
  {/if}
</svg>
