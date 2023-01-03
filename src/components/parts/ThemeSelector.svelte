<script lang="ts">
import { onMount } from "svelte"
import { theme$ } from "src/components/parts/store"

const setTheme = (t: string) => {
	localStorage.setItem("THEME", t)
	window.instantCss()
	theme$.set(t)
}
const resetTheme = () => {
	localStorage.removeItem("THEME")
	window.instantCss()
	theme$.set("")
}

const css1 = "bg=--chambray :hover/bg=--havelock-blue w=6.25 h=2.5 br=.25"
const css2 = "bg=--chambray :hover/bg=--havelock-blue w=6.25 h=2.5 br=.25 bold"
onMount(() => {
	theme$.set(localStorage.getItem("THEME") as string)
})
</script>

<div class="w=6.25 h=2.5">
	<div class="relative h=2.5 top=0 o=hidden br=.25 fw=normal :hover/tt=.5s :hover/h=8.5">
		<div class="absolute flex column r=0 t=0 :hover/tt=top_.5s {$theme$ ? $theme$ === "LIGHT" ? "" : ":not(:hover)/t=-3" : ":not(:hover)/t=-6"}">
			<button class="{$theme$ === "LIGHT" ? css2 : css1}"
				on:click={() => setTheme("LIGHT")}
			><code>LIGHT</code></button>
			<div class="h=.5"></div>
			<button class="{$theme$ === "DARK" ? css2 : css1}"
				on:click={() => setTheme("DARK")}
			><code>DARK</code></button>
			<div class="h=.5"></div>
			<button class="{$theme$ ? css1 : css2}"
				on:click={resetTheme}
			><code>SYSTEM</code></button>
		</div>
	</div>

</div>