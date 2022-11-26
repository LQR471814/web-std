<script lang="ts">
import { classList, styleList } from "@web-std/common/src/general";
import { getContext, onMount } from "svelte";
import { Context, contextKey } from "./common";

const context = getContext<Context>(contextKey);
const id = context.registerColumn();
const headingHeight = context.headingHeight;
const footerHeight = context.footerHeight;

export let className = "flex-1";
export let paddingClass: string | undefined = undefined;

let container: HTMLDivElement;
let content: HTMLDivElement;

const updateColumn = () => {
  context.columns.update((c) => {
    const box = content.getBoundingClientRect();
    const containerBox = container.getBoundingClientRect();
    c[id] = {
      top: Math.abs(box.top - containerBox.top),
      bottom: Math.abs(containerBox.bottom - box.bottom),
    };
    return c;
  });
};

onMount(() => {
  container.onscroll = updateColumn;
  updateColumn()
});
</script>

<div
  class={classList("h-full overflow-y-auto", className)}
  bind:this={container}
>
  <div
    class={paddingClass}
    style={styleList({
      paddingTop: `${$headingHeight}px`,
      paddingBottom: `${$footerHeight}px`,
    })}
    bind:this={content}
  >
    <slot />
  </div>
</div>
