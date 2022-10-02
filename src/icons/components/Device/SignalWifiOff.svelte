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
    <path fill="none" d="M0 0H24V24H0z"/><path d="M2.808 1.393l17.677 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997c.914-.74 1.902-1.391 2.95-1.942L1.394 2.808l1.415-1.415zm.771 5.999L12 17.817l1.967-2.437-8.835-8.836c-.532.254-1.05.536-1.552.848zM12 3c4.284 0 8.22 1.497 11.31 3.996l-5.407 6.693-1.422-1.422 3.939-4.876C17.922 5.841 15.027 5 12 5c-.873 0-1.735.07-2.58.207L7.725 3.51C9.094 3.177 10.527 3 12 3z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0H24V24H0z"/><path d="M2.808 1.393l17.677 17.678-1.414 1.414-3.683-3.683L12 21 .69 6.997c.914-.74 1.902-1.391 2.95-1.942L1.394 2.808l1.415-1.415zM12 3c4.284 0 8.22 1.497 11.31 3.996l-5.407 6.693L7.724 3.511C9.094 3.177 10.527 3 12 3z"/>
  {/if}
</svg>
