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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M16 20.334v-2.199a7.522 7.522 0 0 0 3.623-4.281 9 9 0 0 1-10.622-8.99A7.518 7.518 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963 7 7 0 0 0 10.316 8.728A9.503 9.503 0 0 1 16 20.335zM7 20h7v2H7v-2zm-3-8h6v2H4v-2zm-2 4h10v2H2v-2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M16 20.334V18h-2v-4H3.332A9.511 9.511 0 0 1 3 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0 0 11.49 9.724 9.505 9.505 0 0 1-5.99 8.4zM7 20h7v2H7v-2zm-5-4h10v2H2v-2z"/>
  {/if}
</svg>
