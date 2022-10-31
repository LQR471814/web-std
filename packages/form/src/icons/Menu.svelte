<script lang="ts">
export let className = "";
export let width = 24;
export let height = 24;
export let x: number | undefined = undefined;
export let y: number | undefined = undefined;
</script>

<svg class={className} {width} {height} {x} {y}>
  <path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
</svg>
