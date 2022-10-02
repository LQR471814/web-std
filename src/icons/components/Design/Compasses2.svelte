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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M16.33 13.5A6.988 6.988 0 0 0 19 8h2a8.987 8.987 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A8.97 8.97 0 0 1 12 17a8.97 8.97 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728L16.33 13.5zM14.6 14.502l-1.528-2.647a4.004 4.004 0 0 1-2.142 0l-1.528 2.647c.804.321 1.68.498 2.599.498.918 0 1.795-.177 2.599-.498zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M16.33 13.5A6.988 6.988 0 0 0 19 8h2a8.987 8.987 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A8.97 8.97 0 0 1 12 17a8.97 8.97 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728L16.33 13.5zM14.6 14.502l-1.528-2.647a4.004 4.004 0 0 1-2.142 0l-1.528 2.647c.804.321 1.68.498 2.599.498.918 0 1.795-.177 2.599-.498zM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  {/if}
</svg>
