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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M14.597 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.34l5.657-5.657zm-.194-8.68h2.829L5.918 13.318l-1.414-1.414 9.9-9.9z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M13.503 2.001l-10 10 3.083 3.083 13.08-13.083h-6.163zm-.006 9.198L8.122 16.62 13.494 22h6.189l-5.387-5.4 5.389-5.4h-6.188z"/>
  {/if}
</svg>
