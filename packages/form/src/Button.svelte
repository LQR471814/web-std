<script lang="ts">
import { twMerge } from "tailwind-merge";

export let disabled = false;
export let className = "";
</script>

<button
  {disabled}
  on:click
  class={twMerge(
    "rounded-full border-2",
    "px-3 py-1 font-semibold",
    "transition-all ease-in-out",
    !disabled
      ? "border-slate-900 text-slate-900"
      : "border-slate-600 text-slate-600",
    !disabled ? "hover:cursor-pointer" : "hover:cursor-not-allowed",
    !disabled ? "hover:bg-slate-900 hover:text-slate-100" : "",
    !disabled ? "hover:shadow-lg active:scale-95" : "",
    className,
  )}
>
  <slot />
</button>
