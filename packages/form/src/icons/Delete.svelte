<script lang="ts">
export let className = "";
export let width = 24;
export let height = 24;
export let x: number | undefined = undefined;
export let y: number | undefined = undefined;
</script>

<svg class={className} {width} {height} {x} {y}>
  <path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
</svg>
