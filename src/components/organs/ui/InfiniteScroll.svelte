<script lang="ts">
import { afterUpdate } from "svelte"

export let classs = ""
export let onlast: Function

let container: HTMLDivElement

afterUpdate(() => {
	const childElements = container.querySelectorAll(":scope>*") as NodeListOf<HTMLElement>
	if (childElements.length > 0) {
		let last = container.lastElementChild
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					observer.unobserve(last!)
					onlast()
				}
			}, {
				root: container
				,threshold: 0
			})
		observer.observe(last!)
	}
})
</script>

<div bind:this={container} class="o=auto {classs}">
	<slot></slot>
</div>