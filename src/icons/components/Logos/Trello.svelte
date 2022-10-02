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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M5 5v14h14V5H5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 4h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm6 0h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3zm7.92 3.42v5.76c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33a1.08 1.08 0 0 0-1.08 1.08zm-7.83 0v10.26c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08H6.42a1.08 1.08 0 0 0-1.08 1.08z"/>
  {/if}
</svg>
