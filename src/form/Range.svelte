<script lang="ts">
  import { classList } from "~/common/general";

  export let className: string = "";

  export let min: number;
  export let max: number;
  export let step: number;

  export let value = min;
  export let digits = 1;
</script>

<div class={classList("flex", className)}>
  <p class="font-semibold mr-4">{value.toFixed(digits)}</p>
  <input
    class="w-full"
    type="range"
    {min}
    {max}
    {step}
    bind:value
    on:input
    on:mouseup={(e) => e.currentTarget.blur()}
  />
</div>

<style>
  input {
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  input::-webkit-slider-runnable-track {
    background: rgb(15 23 42);
    border-radius: 9999px;
    height: 5px;
  }

  input::-moz-range-track {
    background: rgb(15 23 42);
    border-radius: 9999px;
    height: 5px;
  }

  input::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;

    border-radius: 9999px;
    border: 2px solid rgb(15 23 42);
    background: white;
    margin-top: -7px;
  }

  input::-moz-range-thumb {
    border-radius: 9999px;
    border: 2px solid rgb(15 23 42);
    background: white;
  }

  input:active::-webkit-slider-thumb {
    transform: scale(0.9);
  }

  input:active::-moz-range-thumb {
    transform: scale(0.9);
  }
</style>
