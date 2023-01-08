<script lang="ts">
import { onMount } from "svelte"

const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
let index = 0
const animation = async () => {
	index = 0
	for (let i = 0; i < 12; i++) {
		await sleep(90)
		index++
	}
	animation()
}
onMount(animation)
</script>

<div class="flex relative w=4 h=4 jc=center ai=center c=#fff fs=1.5 >span/absolute >span/pb=3 >span/bold">
	{#each new Array(12) as n, i}<span class="tf=rotate({i * 30}deg) op={(i = index - i % 12) === 0 ? "1" : i === 1 || i === -11 ? ".75" : i === 2 || i === -10 ? ".5" : ".25"}">|</span>{/each}
</div>