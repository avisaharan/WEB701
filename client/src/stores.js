import { writable, derived } from 'svelte/store'

export const user = writable(null)
export const items = writable([])
export let cartItems = writable([]);
// export let income=writable(Number)
// export let tokensLeft=writable(Number);

// export let valueOfAllTokens=derived(user, reduce((a, b) => ({
//     tokens: a.tokens + b.tokens,
//   })))
// export const valueOfAllItems = derived(items, (value) =>value.reduce((acc, t) => acc + t.value, 0))
