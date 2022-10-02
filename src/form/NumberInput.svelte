<script lang="ts">
  import TextInput from "TextInput.svelte";

  export let value = "";
  export let className = "";
  export let placeholder = "";
  export let error: string | null = null;
</script>

<TextInput {value} {className} {placeholder} {error} />
