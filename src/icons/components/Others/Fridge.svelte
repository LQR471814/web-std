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
    <path fill="none" d="M0 0H24V24H0z"/><path d="M19 1c.552 0 1 .448 1 1v20c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h14zm-1 11H6v9h12v-9zm-8 2v4H8v-4h2zm8-11H6v7h12V3zm-8 2v3H8V5h2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0H24V24H0z"/><path d="M20 12v10c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V12h16zM9 14H7v5h2v-5zM19 1c.552 0 1 .448 1 1v8H4V2c0-.552.448-1 1-1h14zM9 4H7v4h2V4z"/>
  {/if}
</svg>
