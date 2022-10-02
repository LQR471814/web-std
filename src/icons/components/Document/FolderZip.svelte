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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM18 18h-4v-3h2v-2h-2v-2h2V9h-2V7h-2.414l-2-2H4v14h16V7h-4v2h2v2h-2v2h2v5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M21 5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H16v2h2V5h3zm-3 8h-2v2h-2v3h4v-5zm-2-2h-2v2h2v-2zm2-2h-2v2h2V9zm-2-2h-2v2h2V7z"/>
  {/if}
</svg>
