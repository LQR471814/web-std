<script lang="ts">
export let className = "";
export let width = 24;
export let height = 24;
export let x: number | undefined = undefined;
export let y: number | undefined = undefined;
</script>

<svg class={className} {width} {height} {x} {y}>
  <path fill="none" d="M0 0h24v24H0z"></path><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"></path>
</svg>
