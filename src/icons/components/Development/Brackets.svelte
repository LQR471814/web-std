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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z"/>
  {/if}
</svg>
