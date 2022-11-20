<script lang="ts">
import { twMerge } from "tailwind-merge";
import { classList, styleList } from "@web-std/common/src/general";
import { Label } from "@web-std/form";
import { fly } from "svelte/transition";
import { ComponentConstructorOptions, createEventDispatcher, SvelteComponentTyped } from "svelte";
import { clickOutside } from "@web-std/common/src/actions";

interface RequiredProps {
  width?: number;
  height?: number;
}

interface ComponentConstructor {
  new (o: ComponentConstructorOptions): SvelteComponentTyped<RequiredProps>;
}

export let options: {
  title: string;
  icon: ComponentConstructor;
  onaction: (e: MouseEvent) => void;
}[];

type Position = "left" | "top" | "right" | "bottom" | "center";
type Direction = "x" | "y";

const dispatcher = createEventDispatcher<{ select: [boolean, MouseEvent] }>()

const positionMap: {
  [key in Position]: [Direction, number];
} = {
  bottom: ["y", 1],
  top: ["y", -1],
  left: ["x", -1],
  right: ["x", 1],
  center: ["x", 0],
};

export let containerClass = "";
export let menuClass = "";
export let labelClass = "";
export let selectedScaling = "110%"
export let menuOffset = "5%"

export let side: "left" | "top" | "right" | "bottom" = "right";
export let position: "top" | "center" | "bottom" = "center";

$: opposite = Object.keys(positionMap).find((k) => {
  return (
    positionMap[k as Position][0] === positionMap[side][0] &&
    positionMap[k as Position][1] === positionMap[side][1] * -1
  );
}) as Position;
$: orthogonal = Object.keys(positionMap).find((k) => {
  return (
    positionMap[k as Position][0] !== positionMap[side][0]
  )
}) as Position

export let iconWidth = 24;
export let iconHeight = 24;

let selected = false;
</script>

<button
  class={twMerge(
    "w-fit h-fit transition-all duration-300 ease-out-backwards",
    containerClass
  )}
  style={styleList({
    transform: selected ? `scale(${selectedScaling})` : ""
  })}
  on:click={(e) => {
    selected = !selected;
    dispatcher("select", [selected, e])
  }}
  use:clickOutside={{
    callback: () => {
      selected = false
    }
  }}
>
  <slot {selected} />
  {#if selected}
    <div
      class={classList(
        "absolute flex gap-2",
        positionMap[side][0] === "y" ? "w-full" : "flex-col h-full"
      )}
      style={styleList({
        [orthogonal]: "0",
        [opposite]: `calc(100% + ${menuOffset})`,
        justifyContent:
          position === "top"
            ? "start"
            : position === "bottom"
            ? "end"
            : "center",
      })}
    >
      {#each options as props, i}
        <button
          class={twMerge(
            menuClass,
            "flex items-center gap-2 rounded-xl p-2 interactive"
          )}
          on:click={props.onaction}
          transition:fly={{ delay: i * 100, x: -10 - i * 2, duration: 300 }}
        >
          <svelte:component
            this={props.icon}
            width={iconWidth}
            height={iconHeight}
          />
          <Label preset="h4" className={labelClass ? labelClass : undefined}>
            {props.title}
          </Label>
        </button>
      {/each}
    </div>
  {/if}
</button>
