import type { FlyParams } from "svelte/transition"

export function staggeredFly(
    length: number, {
        delay = 100, duration = 300,
        x = -30, y = 0
    },
): (i: number) => FlyParams {
    const step = (delay / length)
    return (i: number) => {
        return {
            delay: step * i,
            duration, x, y
        }
    }
}
