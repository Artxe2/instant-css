<script lang="ts">
export let classs = ""
export let setDragElement: (clientX: number, clientY: number, drag: HTMLElement) => any
export let ondragstart: ((event: DragEvent) => any) | undefined = undefined

let container: HTMLDivElement
let dragView: HTMLDivElement

const handleMousedown = (event: { clientX: number, clientY: number }) => {
	const drag = (dragView.firstChild || container).cloneNode(true) as HTMLDivElement
	drag.style.position = "absolute"
	drag.style.top = container.offsetTop + "px"
	drag.style.left = container.offsetLeft + "px"
	document.body.append(drag)
	setDragElement(event.clientX, event.clientY, drag)
	ondragstart && ondragstart(new DragEvent("dragstart"))
}
const handleTouchstart = (event: TouchEvent) => {
	handleMousedown(event.touches[0])
}
</script>

<div bind:this={container} style="touch-action:none;width:fit-content;user-select:none!important"
		class="{classs}"
		on:mousedown={handleMousedown}
		on:touchstart={handleTouchstart}>
	<slot></slot>
</div>
<div bind:this={dragView} style="display:none">
	<slot name="drag"></slot>
</div>