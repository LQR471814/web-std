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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M9 5v6.273H7V5H5v9h14V5H9zm11 11H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M20 16H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h3v8.273h2V3h11a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"/>
  {/if}
</svg>
