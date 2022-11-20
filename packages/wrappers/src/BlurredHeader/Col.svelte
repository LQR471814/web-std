<script lang="ts">
import { classList, styleList } from "@web-std/common/src/general";
import { getContext, onMount } from "svelte";
import { Context, contextKey } from "./common";

const context = getContext<Context>(contextKey);
const id = context.registerColumn();
const headingHeight = context.headingHeight;

export let className = "flex-1";

let container: HTMLDivElement;

onMount(() => {
  container.onscroll = () => {
    context.columns.update((c) => {
      c[id] = container.scrollTop;
      return c;
    });
  };
});
</script>

<div
  class={classList("h-full overflow-y-auto", className)}
  bind:this={container}
>
  <div
    style={styleList({
      paddingTop: `${$headingHeight}px`,
    })}
  >
    <slot />
  </div>
</div>
