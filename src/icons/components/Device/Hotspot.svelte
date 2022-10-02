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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5zm2 5a2 2 0 0 1 2 2h-2V7zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V4zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V1z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M11 2v9h7v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6zm2 5a2 2 0 0 1 2 2h-2V7zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V4zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V1z"/>
  {/if}
</svg>
