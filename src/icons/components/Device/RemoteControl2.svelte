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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-1 2H7v16h10V4zm-2 11v2h-2v-2h2zm-4 0v2H9v-2h2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6h2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-3 13h-2v2h2v-2zm-4 0H9v2h2v-2zm2-9h-2v2H9v2h1.999L11 12h2l-.001-2H15V8h-2V6z"/>
  {/if}
</svg>
