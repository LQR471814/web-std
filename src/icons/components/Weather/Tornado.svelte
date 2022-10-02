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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z"/>
  {/if}
</svg>
