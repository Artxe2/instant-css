<script lang="ts">
import Style from "src/styles"
import { scroll$ } from "src/components/parts/store"
import { afterUpdate, onDestroy } from "svelte"
import ModalBackground from "src/components/parts/ModalBackground.svelte"

let container: HTMLDivElement

const handleScroll = (event: UIEvent) => {
	scroll$.set((event.target as HTMLDivElement).scrollTop)
    window.history.replaceState({
		scrollPosition: (event.target as HTMLDivElement).scrollTop
		, "sveltekit:index": window.history.state["sveltekit:index"]
	}, "");
}
afterUpdate(() => {
	container.scrollTop = window.history.state.scrollPosition
})
onDestroy(() => {
	scroll$.set(0)
})
</script>

<div bind:this={container} on:scroll={handleScroll} class="h=100% ox=hidden c=#000 @dark@c=#fff {Style.scrollbar.primary}">
	<ModalBackground />
	<slot></slot>
</div>