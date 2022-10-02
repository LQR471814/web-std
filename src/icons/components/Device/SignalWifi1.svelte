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
    <path fill="none" d="M0 0H24V24H0z"/><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 12c-.693 0-1.367.117-2 .34l2 2.477 2-2.477c-.63-.22-1.307-.34-2-.34zm0-10c-3.028 0-5.923.842-8.42 2.392l5.108 6.324C9.698 13.256 10.818 13 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39C17.922 5.841 15.027 5 12 5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0H24V24H0z"/><path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997C3.78 4.497 7.714 3 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392l5.108 6.324C9.698 13.256 10.818 13 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39C17.922 5.841 15.027 5 12 5z"/>
  {/if}
</svg>
