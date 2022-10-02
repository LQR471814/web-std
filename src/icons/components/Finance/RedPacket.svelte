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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M14.173 9.763A9.98 9.98 0 0 0 19 7.141V4H5v3.141a9.98 9.98 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0zm.208 2a2.501 2.501 0 0 1-4.762 0A11.94 11.94 0 0 1 5 9.749V20h14V9.748a11.94 11.94 0 0 1-4.619 2.016zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M21 5.937A11.985 11.985 0 0 1 14.194 9.8a2.5 2.5 0 0 0-4.388 0A11.985 11.985 0 0 1 3 5.937V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.937zm0 2.787V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.724A13.944 13.944 0 0 0 9.63 11.8a2.501 2.501 0 0 0 4.74 0A13.944 13.944 0 0 0 21 8.724z"/>
  {/if}
</svg>
