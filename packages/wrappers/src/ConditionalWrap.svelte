<script lang="ts">
  import type { SvelteComponent } from "svelte";

  export let wrap: boolean;
  export let props: object;
  export let component: typeof SvelteComponent;
</script>

{#if wrap}
  <svelte:component this={component} {...props}>
    <slot />
  </svelte:component>
{:else}
  <slot />
{/if}
