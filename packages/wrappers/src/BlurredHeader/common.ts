import type { Writable } from "svelte/store";

export type Context = {
    headingHeight: Writable<number>;
    columns: Writable<number[]>;
    registerColumn: () => number;
}

export const contextKey = "blurred-header";
