<script lang="ts">
  import { onMount } from "svelte";
  import { resize } from "@web-std/common/actions";

  import { classList } from "@web-std/common/general";
  import ArrowUp from "@web-std/icons/ArrowUp.svelte"

  export let label = "";
  export let className = "";
  export let grow = false;
  export let spring = true;

  let height = 0;
  onMount(() => {
    height = child.clientHeight;
  });

  let expanded = false;
  let child: HTMLElement;
</script>

<div
  class={classList(
    "flex flex-col items-center",
    className,
    grow ? "w-full" : ""
  )}
>
  <div
    class="flex mb-2 hover:cursor-pointer"
    on:click={() => (expanded = !expanded)}
  >
    {#if label}
      <p class="font-semibold mr-1">{label}</p>
    {/if}
    <div
      class={classList(
        expanded ? "rotate-180" : "",
        spring ? "spring" : "",
        "transition-all"
      )}
    >
      <ArrowUp className="w-6 h-6" />
    </div>
  </div>
  <div
    class={classList(
      "overflow-y-hidden transition-all duration-300",
      spring ? "spring" : "",
      grow ? "w-full" : ""
    )}
    style={`height: ${expanded ? `${height}px` : "0px"}`}
  >
    <div
      class={classList(grow ? "w-full" : "", "h-fit")}
      bind:this={child}
      use:resize={(_, __, h) => {
        height = h;
      }}
    >
      <slot />
    </div>
  </div>
</div>
