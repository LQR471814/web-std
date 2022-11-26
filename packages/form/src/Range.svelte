<script lang="ts">
import { twMerge } from "tailwind-merge";
import { clamp, classList, styleList } from "@web-std/common/src/general";
import { createEventDispatcher, onDestroy } from "svelte";
import { transparentize } from "color2k";

export let className: string = "";

export let trackClass = "";
export let trackProgressClass = "";
export let thumbClass = "";

export let min: number;
export let max: number;

export let value = min;
export let digits = 1;

export let disabled = false;
export let showLabel = true;
export let outlineOpacity = 0.5;

const dispatcher = createEventDispatcher<{
  drag: number;
  dragEnd: {
    value: number;
    cancel: () => void;
  };
}>();

let _value = 0;
let _dragging = false;
let _track: HTMLButtonElement | null;
let _thumb: HTMLDivElement | null;
let _focused = false;
let _onthumb = false;

$: {
  if (_onthumb || _dragging) {
    _focused = true;
  } else {
    _focused = false;
  }
}

$: {
  if (_thumb) {
    const outline = window.getComputedStyle(_thumb).outlineColor;
    if (!_thumb.style.outlineColor.startsWith("rgba")) {
      _thumb.style.outlineColor = transparentize(outline, 1 - outlineOpacity);
    }
    _thumb.style.outlineWidth = _focused ? "" : "0px";
  }
}

const onMouseUp = () => {
  if (!_dragging) return;
  let canceled = false;
  dispatcher("dragEnd", {
    value: _value,
    cancel: () => {
      canceled = true;
    },
  });
  if (!canceled) {
    value = _value;
  }
  _dragging = false;
};
const onMouseMove = (e: MouseEvent) => {
  if (_dragging && _track) {
    const rect = _track.getBoundingClientRect();
    const realPosition = (e.clientX - (rect.left ?? 0)) / rect.width;
    _value = min + clamp(realPosition, 0, 1) * (max - min);
    dispatcher("drag", _value);
  }
};

window.addEventListener("mouseup", onMouseUp);
window.addEventListener("mousemove", onMouseMove);
onDestroy(() => {
  window.removeEventListener("mouseup", onMouseUp);
  window.removeEventListener("mousemove", onMouseMove);
});

$: _percentage = `${(((_dragging ? _value : value) - min) / max) * 100}%`;
</script>

<div class={classList("flex", className)}>
  {#if showLabel}
    <p class="font-semibold mr-4">{_value.toFixed(digits)}</p>
  {/if}
  <div class="relative w-full">
    <button
      class="w-full py-3"
      on:mousedown={(e) => {
        if (disabled) return;
        _dragging = true;
        onMouseMove(e);
      }}
      on:mouseup={() => {
        _dragging = false;
      }}
      bind:this={_track}
      {disabled}
    >
      <div class="flex items-center w-full h-fit">
        <div
          class={twMerge(
            "h-[5px] flex-1 bg-slate-900 rounded-full w-full",
            disabled ? "bg-slate-700" : "",
            trackClass
          )}
        />
        <div
          class={twMerge(
            "h-[8px] bg-slate-900 rounded-full absolute left-0",
            disabled ? "bg-slate-700" : "",
            trackProgressClass
          )}
          style={styleList({ width: _percentage })}
        />
      </div>
    </button>
    {#if !disabled}
      <button
        class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 p-4"
        style={`left: ${_percentage}`}
        on:mousedown={(e) => {
          _dragging = true;
        }}
        on:mouseenter={() => {
          _onthumb = true;
          _focused = true;
        }}
        on:mouseleave={() => {
          _onthumb = false;
          if (!_dragging) {
            _focused = false;
          }
        }}
        on:focus={() => (_focused = true)}
        on:blur={() => (_focused = false)}
      >
        <div
          class={twMerge(
            "w-5 h-5 rounded-full border-2  bg-white border-slate-900 shadow-lg",
            "outline-8 outline outline-slate-900 duration-150 active:scale-90 transition-all",
            _dragging ? "scale-90" : "",
            thumbClass
          )}
          bind:this={_thumb}
        />
      </button>
    {/if}
  </div>
</div>
