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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2v5zM16.172 7l-3.95-3.95 1.414-1.414L20 8l-6.364 6.364-1.414-1.414L16.172 9H5V7h11.172z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2v5zm8-9H9a5.992 5.992 0 0 0-4.854 2.473A8.003 8.003 0 0 1 12 6V2l8 6-8 6v-4z"/>
  {/if}
</svg>
