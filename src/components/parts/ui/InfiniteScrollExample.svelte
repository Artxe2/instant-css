<script lang="ts">
import { builder } from "async-sugar"
import LoadingCircle from "src/components/organs/animations/LoadingCircle.svelte"
import IRefresh from "src/components/cells/svgs/i_refresh.svelte"
import H1 from "src/components/cells/texts/H1.svelte"
import InfiniteScroll from "src/components/organs/components/InfiniteScroll.svelte"
import { contents$ } from "src/components/parts/ui/store"
import Style from "src/styles"
import { onDestroy, onMount } from "svelte"

let loading = 1 // 0: in progress, 1: none, 2: error
const loremApi = builder((i: number, n: number) => new Promise((resolve, reject) => setTimeout(() => {
	const r = Math.random()
	if (i && r < 0.3) {
		reject("error: " + r + " < 0.5")
	} else {
		const contents = []
		while (n-- > 0) {
			contents.push({ title: "title " + ++i, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." })
		}
		resolve(contents)
	}
}, i ? 600 : 0)))
const loadContents = () => {
	if (loading) {
		loading = 0
		loremApi.promise($contents$.length, 5)
			.then(value => {
				contents$.set($contents$.concat(value))
				loading = 1
			})
			.catch(() => loading = 2)
	}
}
onMount(() => {
	loremApi.promise(0, 10).then(value => {
		contents$.set(value)
	})
})
onDestroy(() => {
	contents$.set([])
})
</script>

<InfiniteScroll classs="bd=1px_solid_black xh=calc(50%-2em) {Style.scrollbar.primary}"
	onlast={loadContents}
	ready={loading === 1}
>
	{#each $contents$ as c}
		<div>
			<H1>{c.title}</H1>
			<span>{c.content}</span>
		</div>
	{/each}
	{#if !loading}
		<div class="flex h=6.5 jc=center">
			<LoadingCircle />
		</div>
	{:else if loading === 2}
		<div class="relative flex h=6.5 jc=center ai=center">
			<div class="w=6 absolute">
				<IRefresh classs="f=#88888888" />
			</div>
			<button class="absolute fs=1.5 bold" on:click={loadContents}>server error</button>
		</div>
	{/if}
</InfiniteScroll>