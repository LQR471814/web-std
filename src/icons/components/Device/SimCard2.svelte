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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 8v8h-2v-6H8v-2h5zm-5 3h2v2H8v-2zm6 0h2v2h-2v-2zm0-3h2v2h-2v-2zm-6 6h2v2H8v-2zm6 0h2v2h-2v-2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 16v-8H8v2h3v6h2zm-5-5v2h2v-2H8zm6 0v2h2v-2h-2zm0-3v2h2v-2h-2zm-6 6v2h2v-2H8zm6 0v2h2v-2h-2z"/>
  {/if}
</svg>
