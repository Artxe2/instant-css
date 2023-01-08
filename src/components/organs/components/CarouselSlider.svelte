<script lang="ts">
import { afterUpdate, onMount } from "svelte"

export let scrollSnap: "" | "start" |"center" | "end" = ""
export let classs = ""
export let duration = 800
export const snap = (direction: number) => {
	requestAnimationFrame(() => snapping(
		calculateSnapMove(0, direction) / duration
		, Date.now()
		, duration
		, 0
	))
}

let container: HTMLDivElement
let isScrolling = false
let isDragging = false
let startX = 0
let startTimeX = 0
let accumulateX = 0
let update = 0

const handleMousedown = (event: { clientX: number }) => {
	isDragging = true
	startX = event.clientX
	startTimeX = Date.now()
}
const handleTouchstart = (event: TouchEvent) => {
	handleMousedown(event.touches[0])
}
const handleMousemove = (event: MouseEvent) => {
	if (isDragging) {
		event.preventDefault()
		isScrolling = true
		const scrollX = startX - event.clientX
		container.scrollBy(scrollX, event.clientY)
		startX = event.clientX
		if (scrollX < 0 && accumulateX > 0 || scrollX > 0 && accumulateX < 0) {
			startTimeX = Date.now()
			accumulateX = scrollX
		} else {
			accumulateX += scrollX
		}
	}
}
const handleTouchmove = (event: TouchEvent) => {
	handleMousemove(new MouseEvent("mousemove", event.touches[0]))
}
const handleMouseup = () => {
	if (isDragging) {
		const now = Date.now()
		if (scrollSnap === "") {
			const speedX = accumulateX / (now - startTimeX)
			requestAnimationFrame(() => slipping(
				speedX
				, now
				, duration
				, 0
			))
		} else {
			const speedX = calculateSnapMove(accumulateX * duration * 2 / (now - startTimeX), 0)
			requestAnimationFrame(() => snapping(
				speedX / duration
				, now
				, duration
				, 0
			))
		}
		accumulateX = 0
		isDragging = false
	}
}
const handleTouchend = () => {
	handleMouseup()
}
const slipping = (speedX: number, prev: number, time: number, move: number) => {
	if (isDragging) {
		return
	}
	const curr = Date.now()
	const ms = Math.min(time, curr - prev)
	move += speedX * ms * time / duration
	container.scrollLeft += Math.round(move)
	move -= Math.round(move)
	if ((time -= ms) > 0) {
		requestAnimationFrame(() => slipping(
			speedX
			, curr
			, time
			, move
		))
	} else {
		isScrolling = false
	}
}
const calculateSnapMove = (offset: number, direction: number) => {
	const childElements = container.querySelectorAll(":scope>*") as NodeListOf<HTMLElement>
	const length = childElements.length
	if (length == 0) {
		return 0
	}
	let left = 0
	if (scrollSnap === "start") {
		const scrollLeft = container.scrollLeft
		for (let i = 0; ; i++) {
			if (left + childElements[i % length].clientWidth >= scrollLeft + offset) {
				if (scrollLeft - left + offset < childElements[i % length].clientWidth / 2) {
					if (direction < 0) {
						return left - scrollLeft - childElements[(i - 1 + length) % length].clientWidth
					} else if (direction > 0) {
						return left - scrollLeft + childElements[i % length].clientWidth
					} else {
						return left - scrollLeft
					}
				}
				if (direction < 0) {
					return left - scrollLeft
				} else if (direction > 0) {
					return left - scrollLeft + childElements[i % length].clientWidth + childElements[(i + 1) % length].clientWidth
				} else {
					return left - scrollLeft + childElements[i % length].clientWidth
				}
			} else {
				left += childElements[i % length].clientWidth
			}
		}
	} else if (scrollSnap === "end") {
		const scrollLeft = container.scrollLeft + container.clientWidth
		for (let i = 0; ; i++) {
			if (left + childElements[i % length].clientWidth >= scrollLeft + offset) {
				if (scrollLeft - left + offset < childElements[i % length].clientWidth / 2) {
					if (direction < 0) {
						return left - scrollLeft - childElements[(i - 1 + length) % length].clientWidth
					} else if (direction > 0) {
						return left - scrollLeft + childElements[i % length].clientWidth
					} else {
						return left - scrollLeft
					}
				}
				if (direction < 0) {
					return left - scrollLeft
				} else if (direction > 0) {
					return left - scrollLeft + childElements[i % length].clientWidth + childElements[(i + 1) % length].clientWidth
				} else {
					return left - scrollLeft + childElements[i % length].clientWidth
				}
			} else {
				left += childElements[i % length].clientWidth
			}
		}
	} else {
		const scrollLeft = container.scrollLeft + container.clientWidth / 2
		for (let i = 0; ; i++) {
			if (left + childElements[i % length].clientWidth / 2 >= scrollLeft + offset) {
				if (scrollLeft - left + offset < 0) {
					if (direction < 0) {
						return left - scrollLeft - childElements[(i - 1) % length].clientWidth - childElements[(i - 2 + length) % length].clientWidth / 2
					} else if (direction > 0) {
						return left - scrollLeft + childElements[i % length].clientWidth / 2
					} else {
						return left - scrollLeft - childElements[(i - 1 + length) % length].clientWidth / 2
					}
				}
				if (direction < 0) {
					return left - scrollLeft - childElements[(i - 1 + length) % length].clientWidth / 2
				} else if (direction > 0) {
					return left - scrollLeft + childElements[i % length].clientWidth + childElements[(i + 1) % length].clientWidth / 2
				} else {
					return left - scrollLeft + childElements[i % length].clientWidth / 2
				}
			} else {
				left += childElements[i % length].clientWidth
			}
		}
	}
}
const snapping = (speedX: number, prev: number, time: number, move: number) => {
	if (isDragging) {
		return
	}
	const curr = Date.now()
	const ms = Math.min(time, curr - prev)
	move += speedX * ms
	container.scrollLeft += Math.round(move)
	move -= Math.round(move)
	if ((time -= ms) > 0) {
		requestAnimationFrame(() => snapping(
			speedX
			, curr
			, time
			, move
		))
	} else {
		isScrolling = false
	}
}
const copyChilds = (container: HTMLElement, childElements: NodeListOf<HTMLElement>) => {
	let maxChildWidth = 0
	childElements.forEach(child => {
		maxChildWidth = Math.max(maxChildWidth, child.clientWidth)
	})
	const safeWidth = container.clientWidth + maxChildWidth * 3
	while (container.scrollWidth < safeWidth) {
		childElements.forEach(child => {
			const copy = child.cloneNode(true)
			const listeners = (child as any)._listeners
			if (listeners) {
				for (const type in listeners) {
					for (const listener of listeners[type]) {
						copy.addEventListener(type, listener)
					}
				}
			}
			container.appendChild(copy)
		})
	}
}
onMount(() => {
	const childElements = container.querySelectorAll(":scope>*")
	if (childElements.length == 0) {
		return
	}
	copyChilds(container, (childElements as NodeListOf<HTMLElement>))
	let first = container.firstElementChild
	let last = container.lastElementChild
	const observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {
				observer.unobserve(first!)
				observer.unobserve(last!)
				const target = entries[0].target
				if (target === first) {
					container.insertBefore(container.removeChild(last!), target)
					container.scrollLeft += last!.clientWidth
				} else {
					container.appendChild(container.removeChild(first!))
					container.scrollLeft -= first!.clientWidth
				}
				first = container.firstElementChild
				last = container.lastElementChild
				observer.observe(first!)
				observer.observe(last!)
			}
		}, {
			root: container
			,threshold: 0
		})
	observer.observe(first!)
	observer.observe(last!)
})
afterUpdate(() => {
	if (scrollSnap && ++update === 2) {
		container.scrollLeft += calculateSnapMove(0, 0)
	}
})
</script>

<svelte:body
		on:mousemove={handleMousemove}
		on:mouseup={handleMouseup}/>

<div bind:this={container} style="overflow:scroll;touch-action:none"
		class={classs}
		on:mousedown={handleMousedown}
		on:touchstart={handleTouchstart}
		on:touchmove={handleTouchmove}
		on:touchend={handleTouchend}>
	<slot></slot>
</div>