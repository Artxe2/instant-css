<script lang="ts">
import Dragable from "src/components/organs/components/Dragable.svelte"
import { drag$, touchSafe$, transition$ } from "src/components/parts/ui/store"

export let list: string[]
export let transforms: number[]
export let type: "todo" | "done"
export let index: number
export let clientHeight: number
export let duration = 400
export let setDragElement: (clientX: number, clientY: number, drag: HTMLElement) => any
export let transferList: (index: number) => any
export let moveItem: (index: number) => any

const handleDragenter = () => {
	const i = $drag$?.index
	const t = $drag$?.type
	if (i === undefined || i === index && t === type) {
		return
	}
	if (t === type) {
		transferList(index)
	} else {
		moveItem(index)
	}
}
const handleDragstart = () => {
	drag$.set({
		type: type
		, index: index
	})
	transition$.set(true)
}
</script>

<Dragable setDragElement={setDragElement}
		ondragstart={handleDragstart}>
	<div bind:clientHeight={clientHeight}
			class="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY({transforms[index]}px)
			{$transition$ ? " tt=" + duration + "ms" : ""}
			{$drag$?.index === index && $drag$?.type === type ? " opacity=.2 ol=.2_solid_#aaa" : ""}
			{$touchSafe$ === type && index === list.length - 1 ? " none" : ""}"
			on:dragenter={handleDragenter}>
		{list[index]}
	</div>
	<div bind:clientHeight={clientHeight} slot="drag"
			class="ta=center fs=2.5 cs=move c=#000 @dark@c=#fff">
		{list[index] + "!!"}
	</div>
</Dragable>