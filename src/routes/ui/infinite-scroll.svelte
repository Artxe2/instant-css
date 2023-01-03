<script lang="ts">
import { builder } from "async-sugar"
import LoadingCircle from "src/components/cells/animations/LoadingCircle.svelte"
import H1 from "src/components/cells/texts/H1.svelte"
import InfiniteScroll from "src/components/organs/ui/InfiniteScroll.svelte"
import { contents$ } from "src/components/parts/ui/store"
import Style from "src/styles"
import { onDestroy, onMount } from "svelte"

let loading = false
const loremApi = builder((i: number, n: number) => new Promise(resolve => setTimeout(() => {
	const contents = []
	while (n-- > 0) {
		contents.push({ title: "title " + ++i, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." })
	}
	resolve(contents)
}, i ? 600 : 0)))
const concatContents = () => {
	loading = true
	loremApi.promise($contents$.length, 5).then(value => {
		contents$.set($contents$.concat(value))
		loading = false
	})
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
	onlast={concatContents}
>
	{#each $contents$ as c}
		<div>
			<H1>{c.title}</H1>
			<span>{c.content}</span>
		</div>
	{/each}
</InfiniteScroll>
{#if loading}
	<div class="flex jc=center mt=-6">
		<LoadingCircle />
	</div>
{/if}