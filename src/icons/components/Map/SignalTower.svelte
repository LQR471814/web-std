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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M6.116 20.087A9.986 9.986 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.986 9.986 0 0 1-4.116 8.087l-1.015-1.739a8 8 0 1 0-9.738 0l-1.015 1.739zm2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0l-1.03 1.766zM11 13h2v9h-2v-9z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M6.116 20.087A9.986 9.986 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.986 9.986 0 0 1-4.116 8.087l-1.015-1.739a8 8 0 1 0-9.738 0l-1.015 1.739zm2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0l-1.03 1.766zM11 13h2l1 9h-4l1-9z"/>
  {/if}
</svg>
