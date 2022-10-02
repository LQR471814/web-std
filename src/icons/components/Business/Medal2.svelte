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
    <path fill="none" d="M0 0h24v24H0z"/><path fill-rule="nonzero" d="M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zm0 5.207l-.739 1.777-1.916.153 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.459-1.252-1.915-.153L12 13.707zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"/>
  {:else if type === "fill"}
    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"/>
  {/if}
</svg>
