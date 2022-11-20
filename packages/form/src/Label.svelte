<script lang="ts">
import { twMerge } from "tailwind-merge";
import { styleList } from "@web-std/common/src/general";

type LabelPreset = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export let preset: LabelPreset;

export let className: string | undefined = undefined;
export let style: Partial<CSSStyleDeclaration> | undefined = undefined;
export let noMargin = false;
export let noBold = false;

$: _style = style ? styleList(style) : undefined;

const classMap: {
  [key in LabelPreset]: string;
} = {
  h1: "text-4xl font-bold mb-2",
  h2: "text-2xl font-bold mb-2",
  h3: "text-xl font-semibold",
  h4: "text-md font-semibold my-1",
  h5: "text-sm",
  h6: "text-xs",
  p: "text-sm",
  span: "text-sm inline",
};
</script>

<svelte:element
  this={preset}
  class={twMerge(
    "text-start",
    classMap[preset],
    className ?? "",
    noMargin ? "m-0" : "",
    noBold ? "font-normal" : "",
  )}
  style={_style}
>
  <slot />
</svelte:element>
