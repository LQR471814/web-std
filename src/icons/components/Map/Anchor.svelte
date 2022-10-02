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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M2.05 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h4.95c.033.329.05.663.05 1 0 5.523-4.477 10-10 10S2 17.523 2 12c0-.337.017-.671.05-1zM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M13 9.874v10.054c3.619-.453 6.487-3.336 6.938-6.972H17L20.704 7A10.041 10.041 0 0 1 22 11.95C22 17.5 17.523 22 12 22S2 17.5 2 11.95c0-1.8.471-3.489 1.296-4.95L7 12.956H4.062c.451 3.636 3.32 6.519 6.938 6.972V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874zM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  {/if}
</svg>
