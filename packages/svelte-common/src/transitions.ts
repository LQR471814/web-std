export function rotate(node: HTMLElement, {
    delay = 0,
    duration = 300,
    start = 30,
    end = 0,
}) {
    return {
        delay,
        duration,
        css: (t: number) => {
            const eased = t
            return `transform: rotate(${end + start * (1 - eased)}deg)`;
        }
    }
}
