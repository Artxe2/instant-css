<script lang="ts">
import { done$, doneTf$, drag$, todo$, todoTf$, touchSafe$, transition$ } from "src/components/parts/ui/store"
import { onDestroy, onMount } from "svelte"
import DragItem from "src/components/parts/ui/DragItem.svelte"
import DragContainer from "src/components/organs/components/DragContainer.svelte"
import DragItemPlaceHolder from "./DragItemPlaceHolder.svelte"

const todoHeights: number[] = []
const doneHeights: number[] = []
let isDragging: boolean
let setDragElement: (clientX: number, clientY: number, drag: HTMLElement) => any

const handleDragend = () => {
	const from = $drag$!.index
	const type = $drag$!.type
	drag$.set(null)
	if ($touchSafe$) {
		if ($touchSafe$ === "todo") {
			const list = $todo$.slice()
			list.splice(list.length - 1, 1)
			todo$.set(list)
		} else {
			const list = $done$.slice()
			list.splice(list.length - 1, 1)
			done$.set(list)
		}
		touchSafe$.set(null)
	}
	reOrdering(from, type)
}
const transferList = (index: number) => {
	const from = $drag$!.index
	const type = $drag$!.type
	const transforms = (type === "todo" ? $todoTf$ : $doneTf$).slice()
	const heights = type === "todo" ? todoHeights : doneHeights
	if (from < index) {
		if (transforms[index]) {
			for (let i = index; transforms[i]; i++) {
				transforms[from] -= heights[i]
				transforms[i] = 0
			}
		} else {
			for (let i = index; !transforms[i]; i--) {
				transforms[from] += heights[i]
				transforms[i] = -heights[from]
			}
		}
	} else {
		if (transforms[index]) {
			for (let i = index; transforms[i]; i--) {
				transforms[from] += heights[i]
				transforms[i] = 0
			}
		} else {
			for (let i = index; !transforms[i]; i++) {
				transforms[from] -= heights[i]
				transforms[i] = heights[from]
			}
		}
	}
	(type === "todo" ? todoTf$ : doneTf$).set(transforms)
}
const moveItem = (index: number) => {
	const from = $drag$!.index
	const type = $drag$!.type
	if (type === "todo") {
		const before = $todo$.slice()
		const after = $done$.slice()
		after.splice(index, 0, before[from])
		if ($touchSafe$) {
			after.splice(after.length - 1, 1)
			touchSafe$.set(null)
		} else {
			before.splice(before.length, 0, before[from])
			touchSafe$.set(type)
		}
		before.splice(from, 1)
		todo$.set(before)
		done$.set(after)
		todoTf$.set(new Array(before.length).fill(0))
		doneTf$.set(new Array(after.length).fill(0))
		drag$.set({ type: "done", index: index })
		doneHeights.splice(index, 0, todoHeights[from])
		todoHeights.splice(from, 1)
	} else {
		const before = $done$.slice()
		const after = $todo$.slice()
		after.splice(index, 0, before[from])
		if ($touchSafe$) {
			after.splice(after.length - 1, 1)
			touchSafe$.set(null)
		} else {
			before.splice(before.length, 0, before[from])
			touchSafe$.set(type)
		}
		before.splice(from, 1)
		todo$.set(after)
		done$.set(before)
		todoTf$.set(new Array(after.length).fill(0))
		doneTf$.set(new Array(before.length).fill(0))
		drag$.set({ type: "todo", index: index })
		todoHeights.splice(index, 0, doneHeights[from])
		doneHeights.splice(from, 1)
	}
}
const reOrdering = (from: number, type: string) => {
	const transforms = (type === "todo" ? $todoTf$ : $doneTf$).slice()
	if (transforms[from] === 0) {
		return
	}
	const list = (type === "todo" ? $todo$ : $done$).slice()
	const temp = list[from]
	let i
	if (transforms[from] < 0) {
		for (i = from - 1; transforms[i]; i--) {
			list[i + 1] = list[i]
			transforms[i] = 0
		}
		list[i + 1] = temp
	} else {
		for (i = from + 1; transforms[i]; i++) {
			list[i - 1] = list[i]
			transforms[i] = 0
		}
		list[i - 1] = temp
	}
	transforms[from] = 0
	transition$.set(false)
	,(type === "todo" ? todo$ : done$).set(list)
	,(type === "todo" ? todoTf$ : doneTf$).set(transforms)
}
onMount(() => {
	todo$.set([ "Task A", "Task B", "Task C", "Task D" ])
	todoTf$.set(new Array($todo$.length).fill(0))
	done$.set([ "Task E", "Task F", "Task G", "Task H" ])
	doneTf$.set(new Array($done$.length).fill(0))
})
onDestroy(() => {
	todo$.set([])
	todoTf$.set([])
	done$.set([])
	doneTf$.set([])
	transition$.set(false)
	drag$.set(null)
	touchSafe$.set(null)
})
</script>

<DragContainer bind:isDragging={isDragging} bind:setDragElement={setDragElement}
		ondragend={handleDragend}>
	<div class="flex">
		<div class="flex column">
			<span class="fs=2 bold">To do</span>
			<div class="h=.5"></div>
			{#each $todo$ as v, i}
			<DragItem bind:clientHeight={todoHeights[i]}
					setDragElement={setDragElement}
					list={$todo$}
					transforms={$todoTf$}
					type="todo"
					index={i}
					transferList={transferList}
					moveItem={moveItem} />
			{/each}
			{#if !$todo$.length || $todo$.length === 1 && $touchSafe$ === "todo"}
			<DragItemPlaceHolder moveItem={moveItem} />
			{/if}
		</div>
		<div class="w=5"></div>
		<div class="flex column">
			<span class="fs=2 bold">Done</span>
			<div class="h=.5"></div>
			{#each $done$ as v, i}
			<DragItem bind:clientHeight={doneHeights[i]}
					setDragElement={setDragElement}
					list={$done$}
					transforms={$doneTf$}
					type="done"
					index={i}
					transferList={transferList}
					moveItem={moveItem} />
			{/each}
			{#if !$done$.length || $done$.length === 1 && $touchSafe$ === "done"}
			<DragItemPlaceHolder moveItem={moveItem} />
			{/if}
		</div>
	</div>
</DragContainer>