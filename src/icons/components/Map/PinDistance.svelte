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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45l2.475-2.475zM7.5 14.278L3.61 10.39a5.5 5.5 0 1 1 7.78 0L7.5 14.28zM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 12.45l2.475-2.475a3.5 3.5 0 1 0-4.95 0L16.5 20.45zm3.89-1.06l-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0zM16.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M11.39 10.39L7.5 14.277 3.61 10.39a5.5 5.5 0 1 1 7.78 0zM7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12.89 10.89l-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0zM16.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  {/if}
</svg>
