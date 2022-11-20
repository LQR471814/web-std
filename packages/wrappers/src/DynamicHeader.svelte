<script lang="ts" context="module">
import { Context, contextKey } from "./BlurredHeader/common";
import Column from "./BlurredHeader/Col.svelte";
import Header from "./BlurredHeader/Header.svelte";

export const Col = Column;
export const Head = Header;
</script>

<script lang="ts">
import { classList } from "@web-std/common/src/general";
import { setContext } from "svelte";
import { writable } from "svelte/store";

export let className = "";

const columns = writable<number[]>([]);

setContext<Context>(contextKey, {
  headingHeight: writable(0),
  columns: columns,
  registerColumn: () => {
    columns.set([...$columns, 0]);
    return $columns.length - 1;
  },
});
</script>

<div class={classList("flex gap-8 relative h-full", className)}>
  <slot />
</div>
