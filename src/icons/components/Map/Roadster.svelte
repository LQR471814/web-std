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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-2v-5H4v5h16zM5.477 11h13.046a1 1 0 0 0 .928-1.371L18 6H6L4.549 9.629A1 1 0 0 0 5.477 11zM5 14c2.317 0 3.879.755 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1v-2zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736C15.12 14.754 16.682 14 19 14z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.875l2.138-5.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L21.625 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736C7.88 15.754 6.318 15 4 15zm16 0c-2.317 0-3.879.755-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1v-2zM6 6l-1.561 4.684A1 1 0 0 0 5.387 12h13.226a1 1 0 0 0 .948-1.316L18 6H6z"/>
  {/if}
</svg>
