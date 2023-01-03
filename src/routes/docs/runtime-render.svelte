<script lang="ts">
import { base } from "$app/paths"
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
import CssEl from "src/components/cells/texts/CssEl.svelte"
import CssValue from "src/components/cells/texts/CssValue.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
import { onMount } from "svelte"

let index = 0
const next = () => {
	if (index++ === 3) index = 0
	setTimeout(next, 2000)
}
onMount(() => setTimeout(next, 2000))
</script>

<svelte:head>
	<title>Runtime Render Style - Instant CSS</title>
</svelte:head>

<H5>Runtime Render Style</H5>
<div class="h=1"></div>
<span>In InstantCSS, all classes each match one style and are rendered dynamically at runtime.</span><br />
<!-- InstantCSS에서 모든 클래스들은 각각 하나의 스타일과 매칭되며 런타임에 동적으로 생성됩니다. -->
<span>Most importantly, you don't have to waste time naming class or memorizing CSS library class names.</span>
<!-- 가장 중요한 것은 클래스 명을 짓거나 CSS 라이브러리의 클래스 명을 외우기 위해 시간을 허비할 필요가 없다는 것입니다. -->
<div class="h=2"></div>
<CodePage>
	<div class="flex h=10 ai=center jc=center">
		<div class="flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray">
			<img class="w=4 h=4{index > 2 ? " tt=.5s tf=rotate(-15deg)" : ""}" src="{base}/favicon.png" alt="favicon" />
			<div>
				<h3 class="bold fs=2{index > 0 ? " fv=small-caps" : ""}">InstantCSS</h3>
				<div class="relative mt=-.5 w=fit-content{index > 1 ? " _span/ff='Times_New_Roman',Times,serif" : ""}">
					<span>Near-Atomic CSS Library</span>
				</div>
			</div>
		</div>
	</div>
</CodePage>
<div class="h=1"></div>
<CodePage>
	<Html tag="head"><br />
		<TabSpace />. . . . . .<br />
		<TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
		<TabSpace /><Comment>{"<!-- Automatically generated styles at runtime using MutationObserver by InstantCSS -->"}</Comment><br />
		<TabSpace /><Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
			<TabSpace n={2} />. . . . . .<br />
			<TabSpace n={2} /><span class="op={index < 1 ? "0" : "1 tt=1s_linear"}"><CssEl selector=".fv\=small-caps"><CssValue key="font-variant" value="small-caps" /></CssEl><br /></span>
			<TabSpace n={2} /><span class="op={index < 2 ? "0" : "1 tt=1s_linear"}"><CssEl selector="._span\/ff\=\'Times_New_Roman\'\,Times\,serif span"><CssValue key="font-family" value="'Times New Roman',Times,serif" /></CssEl><br /></span>
			<TabSpace n={2} /><span class="op={index < 3 ? "0" : "1 tt=1s_linear"}"><CssEl selector=".tf\=rotate\(-15deg\)"><CssValue key="transform" value="rotate(-15deg)" /></CssEl><br /></span>
		<TabSpace /></Html><br />
	</Html><br />
	<Html tag="body"><br />
		<TabSpace /><Html tag="div" attr={{class: "flex h=10 ai=center jc=center"}}><br />
			<TabSpace n={2} /><Html tag="div" attr={{class: "flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray"}}><br />
				<TabSpace n={3} /><span class="_.foldable/bg=--astronaut;inline-block;va=bottom;o=hidden;ws=nowrap;xw={index > 2 ? "8.5;tt=.85s" : "0"}"><Html tag="img" attr={{class: `w=4 h=4 <span class="foldable">tf=rotate(-15deg)</span>`, src: base + "/favicon.png", alt: "favicon"}}></Html></span><br />
				<TabSpace n={3} /><Html tag="div"><br />
					<TabSpace n={4} /><span class="_.foldable/inline-block;va=bottom;o=hidden;ws=nowrap;xw={index > 0 ? "6.5;tt=.65s" + (index === 1 ? ";bg=--astronaut" : "") : "0"}"><Html tag="h3" attr={{class: `bold fs=2 <span class="foldable">fv=small-caps</span>`}}>InstantCSS</Html><br /></span>
					<TabSpace n={4} /><span class="_.foldable/inline-block;va=bottom;o=hidden;ws=nowrap;xw={index > 1 ? "20;tt=2s" + (index === 2 ? ";bg=--astronaut" : "") : "0"}"><Html tag="div" attr={{class: `relative mt=-.5 w=fit-content <span class="foldable">_span/ff='Times_New_Roman',Times,serif</span>`}}><br />
						<TabSpace n={5} /><Html tag="span">easy & rapid & intuitive</Html><br />
					<TabSpace n={4} /></Html></span><br />
				<TabSpace n={3} /></Html><br />
			<TabSpace n={2} /></Html><br />
		<TabSpace /></Html><br />
	</Html>
</CodePage>