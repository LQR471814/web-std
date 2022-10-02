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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a13.1 13.1 0 0 0-.153-2H20V5H4v3.153A13.1 13.1 0 0 0 2 8V4a1 1 0 0 1 1-1zm10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11zm-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7zm-4 0H2v-3a3 3 0 0 1 3 3z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a13.1 13.1 0 0 0-.153-2H20V5H4v3.153A13.1 13.1 0 0 0 2 8V4a1 1 0 0 1 1-1zm10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11zm-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7zm-4 0H2v-3a3 3 0 0 1 3 3zm9.373-4A13.032 13.032 0 0 0 6 8.627V7h12v10h-3.627z"/>
  {/if}
</svg>
