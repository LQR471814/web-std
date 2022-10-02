<script lang="ts">
  export let filter: string[];
  export let handler: (files: File[]) => void;

  const upload = (
    e: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ) => {
    if (!e.currentTarget.files) return;
    handler(Array.from(e.currentTarget.files));
  };
</script>

<input
  class="hidden"
  id="file-input"
  type="file"
  accept={filter.join(",")}
  multiple
  on:change={upload}
/>
