<script lang="ts">
import { naviOpen$ } from "src/components/parts/docs/store"
import Style from "src/styles"
import { afterUpdate } from "svelte"

let container: HTMLDivElement

const handleScroll = (event: UIEvent) => {
    window.history.replaceState({
		scrollPosition: (event.target as HTMLDivElement).scrollTop
		, "sveltekit:index": window.history.state["sveltekit:index"]
	}, "");
}
afterUpdate(() => {
	container.scrollTop = window.history.state.scrollPosition
})
</script>

<div bind:this={container} on:scroll={handleScroll} class="h=100% oy=auto @!md@tt=.5s @!md@ml={$naviOpen$ ? "20 @!md@mr=-20" : "0 @!md@mr=0"} {Style.scrollbar.primary}">
	<div class="w=80% h=100% m=auto">
		<div class="h=2"></div>
		<slot></slot>
		<div class="h=2"></div>
	</div>
</div>