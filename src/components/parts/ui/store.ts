import { writable, type Writable } from 'svelte/store'

export const contents$: Writable<{ title: string, content: string }[]> = writable([])