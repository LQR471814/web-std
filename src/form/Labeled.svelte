<script lang="ts">
  import Label from "~/form/Label.svelte";
  export let label: string;
</script>

<div class="flex items-start justify-between mb-1">
  <Label className="mr-5" preset="h3">{label}</Label>
  <slot />
</div>
