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
    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.702 0-3.305-.425-4.708-1.175L2 22l1.176-5.29C2.426 15.306 2 13.703 2 12 2 6.477 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349c1.148.614 2.43.939 3.765.939 4.418 0 8-3.582 8-8s-3.582-8-8-8zm1 3v5h4v2h-6V7h2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0L24 0 24 24 0 24z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.702 0-3.305-.425-4.708-1.175L2 22l1.176-5.29C2.426 15.306 2 13.703 2 12 2 6.477 6.477 2 12 2zm1 5h-2v7h6v-2h-4V7z"/>
  {/if}
</svg>
