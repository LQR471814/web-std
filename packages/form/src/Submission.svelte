<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Button from "./Button.svelte";
  import LinkButton from "./LinkButton.svelte";

  const dispatcher = createEventDispatcher<{ submit: void; cancel: void }>();

  export let disabled = false;
  export let cancelable = true;
</script>

<div class="flex justify-between">
  <Button {disabled} on:click={() => dispatcher("submit")}>Done</Button>
  {#if cancelable}
    <LinkButton on:click={() => dispatcher("cancel")}>cancel</LinkButton>
  {/if}
</div>
