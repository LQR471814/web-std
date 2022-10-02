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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M15.388 13.498l2.552 7.014-4.698 1.71-2.553-7.014-3.899 2.445L8.41 1.633l11.537 11.232-4.558.633zm-.011 5.818l-2.715-7.46 2.96-.41-5.64-5.49-.79 7.83 2.53-1.587 2.715 7.46.94-.343z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M13.91 12.36L17 20.854l-2.818 1.026-3.092-8.494-4.172 3.156 1.49-14.909 10.726 10.463z"/>
  {/if}
</svg>
