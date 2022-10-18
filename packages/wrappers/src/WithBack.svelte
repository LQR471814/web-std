<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { classList } from "@web-std/common/general.ts";
  import { useClose } from "@web-std/svelte-common/hooks.ts";

  import { ArrowLeft } from "@web-std/icons";
  import Position from "./Position.svelte";

  const dispatcher = createEventDispatcher<{ close: { clicked: boolean } }>();
  useClose(() => dispatcher("close", { clicked: false }));
</script>

<slot />

<Position x="left" y="top">
  <div
    on:click={() => dispatcher("close", { clicked: true })}
    class={classList(
      "w-16 h-16 transition-all",
      "hover:scale-110 hover:cursor-pointer"
    )}
  >
    <ArrowLeft className="w-full h-full" />
  </div>
</Position>
