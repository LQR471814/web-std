<script lang="ts">
  import { classList, styleList } from "~/common/general";

  type X = "left" | "middle" | "right";
  type Y = "top" | "middle" | "bottom";

  const defaultMargin = "32px";

  export let x: X;
  export let y: Y;

  export let margin = defaultMargin;
  export let marginAxis: "x" | "y" | "both" = "both";

  export let className = "";
  export let fit = true;

  $: marginX =
    marginAxis === "x" || marginAxis === "both"
      ? margin ?? defaultMargin
      : defaultMargin;
  $: marginY =
    marginAxis === "y" || marginAxis === "both"
      ? margin ?? defaultMargin
      : defaultMargin;

  $: style = styleList({
    left: x === "left" ? marginX : undefined,
    right: x === "right" ? marginX : undefined,
    top: y === "top" ? marginY : undefined,
    bottom: y === "bottom" ? marginY : undefined,
  });
</script>

<div
  class={classList(
    "fixed",
    fit ? "w-fit h-fit" : "",
    className,
    x === "middle" ? "p-centered-x" : "",
    y === "middle" ? "p-centered-y" : ""
  )}
  {style}
>
  <slot />
</div>
