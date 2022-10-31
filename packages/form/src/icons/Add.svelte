<script lang="ts">
export let className = "";
export let width = 24;
export let height = 24;
export let x: number | undefined = undefined;
export let y: number | undefined = undefined;
</script>

<svg class={className} {width} {height} {x} {y}>
  <path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
</svg>
