<script lang="ts">
  export let selected: string;
  export let options: {
    [key: string]: () => void;
  };
</script>

<div class="h-full">
  {#each Object.keys(options) as name}
    <div class="flex mx-1 h-full items-center">
      <p class="mb-1 mr-1">{name}</p>
      <input
        type="radio"
        checked={selected === name}
        on:change={(e) => {
          e.preventDefault();
          selected = name;
          options[name]();
        }}
      />
    </div>
  {/each}
</div>

<style>
  input[type="radio"] {
    appearance: none;
    background-color: transparent;

    width: 1.15rem;
    height: 1.15rem;

    display: grid;
    place-content: center;

    @apply mx-1 border-2 text-slate-900 border-slate-900 rounded-full;
  }

  input[type="radio"]:hover {
    cursor: pointer;
  }

  input[type="radio"]::before {
    content: "";

    width: 0.65rem;
    height: 0.65rem;

    border-radius: 50%;
    box-shadow: inset 1rem 1rem rgb(15 23 42);

    transform: scale(0.75);
    opacity: 0;

    transition: all 0.2s;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
    opacity: 1;
  }
</style>
