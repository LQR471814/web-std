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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 6a1 1 0 0 1 1 1v4h-1.5v4h-3v-4H9v-4a1 1 0 0 1 1-1h4zm-2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 8h-4a1 1 0 0 0-.993.883L9 11v4h1.5v4h3v-4H15v-4a1 1 0 0 0-.883-.993L14 10zm-2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
  {/if}
</svg>
