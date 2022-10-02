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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8zm0 2c2.761 0 5 2.686 5 6s-2.239 6-5 6-5-2.686-5-6 2.239-6 5-6zm2.325 3.472l-3.562 6.173c.377.228.796.355 1.237.355 1.657 0 3-1.79 3-4 0-.959-.253-1.839-.675-2.528zM12 8c-1.657 0-3 1.79-3 4 0 .959.253 1.839.675 2.528l3.562-6.173A2.377 2.377 0 0 0 12 8z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 4c-2.761 0-5 2.686-5 6s2.239 6 5 6 5-2.686 5-6-2.239-6-5-6zm2.325 3.472c.422.69.675 1.57.675 2.528 0 2.21-1.343 4-3 4-.378 0-.74-.093-1.073-.263l-.164-.092 3.562-6.173zM12 8c.378 0 .74.093 1.073.263l.164.092-3.562 6.173C9.253 13.838 9 12.958 9 12c0-2.21 1.343-4 3-4z"/>
  {/if}
</svg>
