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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M4 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4zm4-11H5v9h3v-9zm11 0h-9v9h9v-9zm0-5H5v3h14V5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M8 10v11H4a1 1 0 0 1-1-1V10h5zm13 0v10a1 1 0 0 1-1 1H10V10h11zm-1-7a1 1 0 0 1 1 1v4H3V4a1 1 0 0 1 1-1h16z"/>
  {/if}
</svg>
