<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let checked: boolean;

  const dispatcher = createEventDispatcher<{ change: boolean }>();
</script>

<input
  type="checkbox"
  {checked}
  on:change={(e) => {
    e.preventDefault();
    dispatcher("change", !checked);
  }}
/>

<style>
  input[type="checkbox"] {
    appearance: none;
    background-color: transparent;
    margin: 0;

    width: 1.15rem;
    height: 1.15rem;

    display: grid;
    place-content: center;

    @apply mx-2 border-2 text-slate-900 border-slate-900 rounded-sm;
  }

  input[type="checkbox"]:hover {
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    content: "";

    width: 0.65rem;
    height: 0.65rem;

    box-shadow: inset 1rem 1rem rgb(15 23 42);

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);

    opacity: 0;
    transform: scale(0.75);

    transition: all 0.2s;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    opacity: 1;
  }
</style>
