<script lang="ts">
  import { classList, styleList } from "~/common/general";

  type LabelPreset = "h2" | "h3" | "h4" | "p";

  export let preset: LabelPreset;
  export let className = "";
  export let style: Partial<CSSStyleDeclaration> | undefined = undefined;

  $: _style = styleList(style ?? {});
</script>

{#if preset === "h2"}
  <h2 class={classList("text-xl font-bold mb-3", className)} style={_style}>
    <slot />
  </h2>
{:else if preset === "h3"}
  <h3 class={classList("text-md font-semibold", className)} style={_style}>
    <slot />
  </h3>
{:else if preset === "h4"}
  <h4 class={classList("text-sm font-semibold my-1", className)} style={_style}>
    <slot />
  </h4>
{:else if preset === "p"}
  <p class={classList("text-sm", className)} style={_style}><slot /></p>
{/if}
