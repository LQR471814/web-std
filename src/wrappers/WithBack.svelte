<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { classList } from "~/common/general";
  import { useClose } from "~/common/hooks";

  import ArrowLeft from "~/icons/components/System/ArrowLeft.svelte";
  import Position from "~/wrappers/Position.svelte";

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
