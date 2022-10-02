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
    <path fill="none" d="M0 0h24v24H0z"/><path d="M12.684 4.029a8 8 0 1 0 7.287 7.287 7.936 7.936 0 0 0-.603-2.44l1.5-1.502A9.933 9.933 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.982 9.982 0 0 1 4.626 1.132l-1.501 1.5a7.941 7.941 0 0 0-2.44-.603zM20.485 2.1L21.9 3.515l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M16.626 3.132L9.29 10.466l.008 4.247 4.238-.007 7.331-7.332A9.957 9.957 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.669 0 3.242.409 4.626 1.132zm3.86-1.031l1.413 1.414-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"/>
  {/if}
</svg>
