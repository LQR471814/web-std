<script lang="ts" context="module">
import { Context, ColumnState, contextKey } from "./DynamicHeader/common";
import Column from "./DynamicHeader/Col.svelte";
import Header from "./DynamicHeader/Header.svelte";
import Footer from "./DynamicHeader/Footer.svelte";

export const Col = Column;
export const Head = Header;
export const Foot = Footer;
</script>

<script lang="ts">
import { setContext } from "svelte";
import { writable } from "svelte/store";
import { twMerge } from "tailwind-merge";

export let className = "";

const columns = writable<ColumnState[]>([]);

setContext<Context>(contextKey, {
  headingHeight: writable(0),
  footerHeight: writable(0),
  columns: columns,
  registerColumn: () => {
    columns.set([
      ...$columns,
      {
        bottom: 0,
        top: 0,
      },
    ]);
    return $columns.length - 1;
  },
});
</script>

<div class={twMerge("flex gap-8 relative h-full", className)}>
  <slot />
</div>
