<script lang="ts">
  import { classList } from "~/common/general";
  export let className = ""
</script>

<button
  on:click
  class={classList(
    "font-semibold text-slate-900 mx-2",
    "hover:underline hover:cursor-pointer",
    "transition-all ease-in-out",
    className,
  )}
>
  <slot></slot>
</button>
