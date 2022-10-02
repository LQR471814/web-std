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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M4 16v4h4v2H2v-6h2zm18 0v6h-6v-2h4v-4h2zM7.5 7a4.502 4.502 0 0 0 3.5 4.389V17h2l.001-5.612A4.502 4.502 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7h2zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 2v2l-4-.001V8H2V2h6zm14 0v6h-2V4h-4V2h6z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M4 16v4h4v2H2v-6h2zm18 0v6h-6v-2h4v-4h2zM7.5 7a4.5 4.5 0 0 0 9 0h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7h2zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 2v2l-4-.001V8H2V2h6zm14 0v6h-2V4h-4V2h6z"/>
  {/if}
</svg>
