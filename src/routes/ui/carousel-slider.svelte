<script lang="ts">
import CarouselSlider from "src/components/organs/components/CarouselSlider.svelte"
import CarouselSliderExample from "src/components/organs/ui/CarouselSliderExample.svelte"
</script>

<CarouselSlider classs="flex
		::-webkit-scrollbar/none">
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
<CarouselSlider classs="flex h=3
		::-webkit-scrollbar/none">
	<div class="w=10% h=100% bg=red ta=center">
		red
	</div>
	<div class="w=20% h=100% bg=orange ta=center">
		orange
	</div>
</CarouselSlider>
<div class="h=3"></div>
<CarouselSliderExample />