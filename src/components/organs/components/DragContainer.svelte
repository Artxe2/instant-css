<script lang="ts">
export let isDragging = false
export let dragElement: HTMLElement | null = null
export let ondrag: ((event: DragEvent) => any) | undefined = undefined
export let ondragend: ((event: DragEvent) => any) | undefined = undefined
export const setDragElement = (clientX: number, clientY: number, drag: HTMLElement) => {
	dragElement = drag
	x = clientX
	y = clientY
	isDragging = true
}

let terrain: HTMLElement | null
let x = 0
let y = 0

const handleMousemove = (event: { clientX: number, clientY: number }) => {
	if (isDragging) {
		const current = getTerrain(document.elementsFromPoint(event.clientX, event.clientY))
		if (current && terrain != current) {
			if (terrain) {
				terrain.dispatchEvent(new DragEvent("dragleave"))
			}
			terrain = current as HTMLElement
			terrain.dispatchEvent(new DragEvent("dragenter"))
		}
		dragElement!.style.transform = `translate(${event.clientX - x}px, ${event.clientY - y}px)`
		ondrag && ondrag(new DragEvent("dragmove"))
	}
}
const handleTouchmove = (event: TouchEvent) => {
	handleMousemove(event.touches[0])
}
const handleMouseup = () => {
	if (isDragging) {
		document.body.removeChild(dragElement!)
		if (terrain) {
			terrain.dispatchEvent(new DragEvent("drop"))
			terrain = null
		}
		dragElement = null
		isDragging = false
		ondragend && ondragend(new DragEvent("dragend"))
	}
}
const handleTouchend = () => {
	handleMouseup()
}
const getTerrain = (terrains: Element[]) => {
	const length = terrains.length
	for (let i = 0; i < length; i++) {
		if (!dragElement!.compareDocumentPosition(terrains[i])) {
			return terrains[i + 1]
		}
	}
}
</script>

<svelte:body
		on:mousemove={handleMousemove}
		on:mouseup={handleMouseup}
		on:touchmove={handleTouchmove}
		on:touchend={handleTouchend} />

<slot></slot>