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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M18.5 2a4.5 4.5 0 0 1 .883 8.913l.011.027a8 8 0 0 1-7.145 11.056L12 22a8 8 0 0 1-7.382-11.088A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254l.073-.019A8.018 8.018 0 0 1 12 6l.25.004a8 8 0 0 1 1.756.25A4.5 4.5 0 0 1 18.5 2zM12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM5.5 4a2.5 2.5 0 0 0 0 5l.164-.005.103-.01A8.044 8.044 0 0 1 7.594 7.32l.33-.206A2.5 2.5 0 0 0 5.5 4zm13 0a2.5 2.5 0 0 0-2.466 2.916l.043.2.028.016a8.04 8.04 0 0 1 2.128 1.852A2.5 2.5 0 1 0 18.5 4z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M18.5 2a4.5 4.5 0 0 1 .883 8.913 8 8 0 1 1-14.765-.001A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A7.998 7.998 0 0 1 12 6c.693 0 1.365.088 2.006.254A4.5 4.5 0 0 1 18.5 2z"/>
  {/if}
</svg>
