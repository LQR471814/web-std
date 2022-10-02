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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3zm4-11H4v9h3v-9zm13 0H9v9h11v-9zm0-5H4v3h16V5z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M7 10v11H3a1 1 0 0 1-1-1V10h5zm15 0v10a1 1 0 0 1-1 1H9V10h13zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1h18z"/>
  {/if}
</svg>
