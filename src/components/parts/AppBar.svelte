<script lang="ts">
import { base } from "$app/paths"
import { scroll$ } from "src/components/parts/store"
import MorphingText from "src/components/organs/animations/MorphingText.svelte"
import AppBarMenu from "src/components/parts/AppBarMenu.svelte"

let class1 = "bg=#3b599825 c=#00000050 @dark@c=#ffffff50 bs=0_.5_.5_#3b599850 :hover/bg=#3b5998aa :hover/c=#000 :hover/bs=0_.5_.5_#3b5998 @dark@:hover/c=#fff"
let class2 = "bg=#3b5998aa c=#000 @dark@c=#fff bs=0px_5px_5px_#3b5998"
</script>

<div class="z=10 fixed flex ai=center w=100% h=4 tt=background-color_.5s {$scroll$ ? class1 : class2} :hover_.op\=\.6/op=1">
	<div class="w=1"></div>
	<a href="{base}/">
		<button>
			<code class="fs=2 _span/bold @lg@fs=2.5 c=#000 @dark@c=#fff >div/ta=left op={$scroll$ ? ".6" : "1"}">
				<MorphingText
					array={[
						[ `<span class="c=red">O</span>n-<span class="c=red">D</span>emand`, 1500 ],
						[ `<span class="c=red">U</span>tility-<span class="c=red">F</span>irst`, 1500 ],
						[ `<span class="c=red">N</span>ear-<span class="c=red">A</span>tomic`, 1500 ],
						[ `<span class="fv=small-caps">InstantCSS</span>`, 2500 ]
					]}
					longest={2}
					transition={500}
				/>
			</code>
		</button>
	</a>
	<div class="fg=1"></div>
	<AppBarMenu />
</div>