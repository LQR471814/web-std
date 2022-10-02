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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4zm10.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM12 2l4 4h-3v5h-2V6H8l4-4z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16zm-1 14H5v4h14v-4zm-2 1v2h-2v-2h2zM12 2L8 6h3v5h2V6h3l-4-4z"/>
  {/if}
</svg>
