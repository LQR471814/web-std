import type { Writable } from "svelte/store";

export type ColumnState = {
    top: number
    bottom: number
}

export type Context = {
    headingHeight: Writable<number>;
    footerHeight: Writable<number>;
    columns: Writable<ColumnState[]>;
    registerColumn: () => number;
}

export const contextKey = "blurred-header";
