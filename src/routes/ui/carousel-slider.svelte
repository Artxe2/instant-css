<script lang="ts">
import CarouselSlider from "src/components/organs/ui/CarouselSlider.svelte"

let scrollSnap: "" | "start" |"center" | "end" = "center"
let snap: (direction: number) => void
const btnCss = "bg=--chambray :hover/bg=--havelock-blue w=6.25 h=1.5 br=.25 fs=.75"
</script>

<CarouselSlider classs="w=100%">
	<div class="w=90% h=100% bg=red ta=center">
		red
	</div>
	<div class="w=90% h=100% bg=orange ta=center">
		orange
	</div>
	<div class="w=90% h=100% bg=yellow ta=center">
		yellow
	</div>
	<div class="w=90% h=100% bg=green ta=center">
		green
	</div>
	<div class="w=90% h=100% bg=blue ta=center">
		blue
	</div>
	<div class="w=90% h=100% bg=navy ta=center">
		navy
	</div>
	<div class="w=90% h=100% bg=purple ta=center">
		purple
	</div>
</CarouselSlider>
<div class="h=1"></div>
<CarouselSlider classs="h=3 sst=mandatory >ssa=center">
	<div class="w=10% h=100% bg=red ta=center">
		red
	</div>
	<div class="w=20% h=100% bg=orange ta=center">
		orange
	</div>
</CarouselSlider>
<div class="h=3"></div>
<div>
	<CarouselSlider classs="h=3" scrollSnap={scrollSnap} duration={200} bind:snap={snap}>
		<div class="w=10% h=100% bg=red ta=center">
			red
		</div>
		<div class="w=20% h=100% bg=orange ta=center">
			orange
		</div>
		<div class="w=30% h=100% bg=yellow ta=center">
			yellow
		</div>
		<div class="w=40% h=100% bg=green ta=center">
			green
		</div>
		<div class="w=50% h=100% bg=blue ta=center">
			blue
		</div>
		<div class="w=60% h=100% bg=navy ta=center">
			navy
		</div>
		<div class="w=70% h=100% bg=purple ta=center">
			purple
		</div>
	</CarouselSlider>
	<div class="h=1"></div>
	<div class="flex jc=space-between >button/flex=auto g=1">
		<button class={btnCss} on:click={() => snap(-1)}>PREV</button>
		<button class={btnCss} on:click={() => { scrollSnap = "start"; snap(0)}}>START</button>
		<button class={btnCss} on:click={() => { scrollSnap = "center"; snap(0)}}>CENTER</button>
		<button class={btnCss} on:click={() => { scrollSnap = "end"; snap(0)}}>END</button>
		<button class={btnCss} on:click={() => snap(1)}>NEXT</button>
	</div>
</div>