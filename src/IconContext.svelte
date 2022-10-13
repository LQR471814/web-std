<script lang="ts">
  import { setContext } from "svelte";
  import { Context, iconKey } from "~/icon-context";

  export let context: Context = {}

  setContext<Context>(iconKey, context);
</script>

<slot />
