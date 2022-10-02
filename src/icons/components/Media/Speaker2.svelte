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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M5 5v14h14V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  {/if}
</svg>
