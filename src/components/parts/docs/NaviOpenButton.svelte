<script lang="ts">
import { naviOpen$ } from "src/components/parts/docs/store"
import { onDestroy } from "svelte"

const handleClick = () => {
	naviOpen$.set(!$naviOpen$)
}
onDestroy(() => {
	naviOpen$.set(false)
})
</script>

<div class="relative">
	<div class="z=1 absolute h=100% flex tt=.5s {$naviOpen$ ? "l=17 tf=rotateY(180deg)" : "l=0"} @md@none">
		<button class="m=auto fs=5 bold lh=1 us=none {$naviOpen$ ? "c=--chambray" : ":hover/c=--chambray"}"
			on:click={handleClick}
		>></button>
	</div>
</div>