<script lang="ts">
import { styleList } from "@web-std/common/src/general";

export let gap = "";
</script>

<div class="h-full flex flex-col" style={styleList({ gap })}>
  <slot />
</div>
