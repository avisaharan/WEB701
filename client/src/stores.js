import { writable, derived } from 'svelte/store'

export const user = writable(null)
export const items = writable([])
export const loggedInUser = writable(null)
export const cartItems = writable([])
