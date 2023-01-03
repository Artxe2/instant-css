<script lang="ts">
import { base } from "$app/paths"
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import CssEl from "src/components/cells/texts/CssEl.svelte"
import CssValue from "src/components/cells/texts/CssValue.svelte"
import H4 from "src/components/cells/texts/H4.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
</script>

<style>
	.content-container {
		display: flex;
		height: 10em;
		align-items: center;
		justify-content: center;
	}
	.content-box {
		display: flex;
		width: fit-content;
		background: #fff;
		color: #000;
		padding: .5em;
		border-radius: .5em;
		box-shadow: 0 1em 1em gray;
	}
	.content-icon {
		width: 4em;
		height: 4em;
		transform: rotate(-15deg);
	}
	.content-subject {
		font-weight: bold;
		font-size: 2em;
		font-variant: small-caps;
	}
	.content-description {
		position: relative;
		margin-top: -.5em;
		width: fit-content;
	}
	.content-description span {
		font-family: 'Times New Roman', Times, serif
	}
</style>

<svelte:head>
	<title>Utillity-First Fundamentals - Instant CSS</title>
</svelte:head>

<H4>Utillity-First Fundamentals</H4>
<div class="h=2"></div>
<H5>Semantic CSS</H5>
<CodePage>
	<div class="content-container">
		<div class="content-box">
			<img class="content-icon" src="{base}/favicon.png" alt="favicon" />
			<div>
				<h3 class="content-subject">InstantCSS</h3>
				<div class="content-description">
					<span>Near-Atomic CSS Library</span>
				</div>
			</div>
		</div>
	</div>
</CodePage>
<div>
	<span>In the old way, whenever you needed to style the web, you had to name a class and write CSS.</span><br />
	<!-- 기존 방식에서는 웹에서 스타일을 지정해야 할 때마다 클래스 명을 정하고 CSS를 작성해야 합니다. -->
</div>
<CodePage>
	<Html tag="head"><br />
		<TabSpace /><Html tag="style"><br />
			<TabSpace n={2} /><CssEl selector=".content-container "><br />
				<TabSpace n={3} /><CssValue key="display" value=" flex" />;<br />
				<TabSpace n={3} /><CssValue key="height" value=" 10em" />;<br />
				<TabSpace n={3} /><CssValue key="align-items" value=" center" />;<br />
				<TabSpace n={3} /><CssValue key="justify-content" value=" center" />;<br />
			<TabSpace n={2} /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".content-box "><br />
				<TabSpace n={3} /><CssValue key="display" value=" flex" />;<br />
				<TabSpace n={3} /><CssValue key="width" value=" fit-content" />;<br />
				<TabSpace n={3} /><CssValue key="background" value=" #fff" />;<br />
				<TabSpace n={3} /><CssValue key="color" value=" #000" />;<br />
				<TabSpace n={3} /><CssValue key="padding" value=" .5em" />;<br />
				<TabSpace n={3} /><CssValue key="border-radius" value=" .5em" />;<br />
				<TabSpace n={3} /><CssValue key="box-shadow" value=" 0 1em 1em gray" />;<br />
			<TabSpace n={2} /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".content-icon "><br />
				<TabSpace n={3} /><CssValue key="width" value=" 4em" />;<br />
				<TabSpace n={3} /><CssValue key="height" value=" 4em" />;<br />
				<TabSpace n={3} /><CssValue key="transform" value=" rotate(-15deg)" />;<br />
			<TabSpace n={2} /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".content-subject "><br />
				<TabSpace n={3} /><CssValue key="font-weight" value=" bold" />;<br />
				<TabSpace n={3} /><CssValue key="font-size" value=" 2em" />;<br />
				<TabSpace n={3} /><CssValue key="font-variant" value=" small-caps" />;<br />
			<TabSpace n={2} /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".content-description "><br />
				<TabSpace n={3} /><CssValue key="position" value=" relative" />;<br />
				<TabSpace n={3} /><CssValue key="margin-top" value=" -.5em" />;<br />
				<TabSpace n={3} /><CssValue key="width" value=" fit-content" />;<br />
			<TabSpace n={2} /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".content-description span "><br />
				<TabSpace n={3} /><CssValue key="font-family" value=" 'Times New Roman', Times, serif" />;<br />
			<TabSpace n={2} /></CssEl><br />
		<TabSpace /></Html><br />
	</Html><br />
	<Html tag="body"><br />
		<TabSpace /><Html tag="div" attr={{class: "content-container"}}><br />
			<TabSpace n={2} /><Html tag="div" attr={{class: "content-box"}}><br />
				<TabSpace n={3} /><Html tag="img" attr={{class: "content-icon", src: base + "/favicon.png", alt: "favicon"}}></Html><br />
				<TabSpace n={3} /><Html tag="div"><br />
					<TabSpace n={4} /><Html tag="h3" attr={{class: "content-subject"}}>InstantCSS</Html><br />
					<TabSpace n={4} /><Html tag="div" attr={{class: "content-description"}}><br />
						<TabSpace n={5} /><Html tag="span">easy & rapid & intuitive</Html><br />
					<TabSpace n={4} /></Html><br />
				<TabSpace n={3} /></Html><br />
			<TabSpace n={2} /></Html><br />
		<TabSpace /></Html><br />
	</Html>
</CodePage>
<div class="h=2"></div>
<H5>Utillity-First CSS</H5>
<CodePage>
	<div class="flex h=10 ai=center jc=center">
		<div class="flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray">
			<img class="w=4 h=4 tf=rotate(-15deg)" src="{base}/favicon.png" alt="favicon" />
			<div>
				<h3 class="bold fs=2 fv=small-caps">InstantCSS</h3>
				<div class="relative mt=-.5 w=fit-content _span/ff='Times_New_Roman',Times,serif">
					<span>Near-Atomic CSS Library</span>
				</div>
			</div>
		</div>
	</div>
</CodePage>
<div>
	<span>With InstantCSS, you style elements by applying pre-existing classes directly in your HTML.</span><br />
	<!-- InstantCSS를 사용하면 HTML에서 직접 기존 클래스를 적용하여 요소의 스타일을 지정할 수 있습니다. -->
</div>
<CodePage>
	<Html tag="head"><br />
		<TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
	</Html><br />
	<Html tag="body"><br />
		<TabSpace /><Html tag="div" attr={{class: "flex h=10 ai=center jc=center"}}><br />
			<TabSpace n={2} /><Html tag="div" attr={{class: "flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray"}}><br />
				<TabSpace n={3} /><Html tag="img" attr={{class: "w=4 h=4 tf=rotate(-15deg)", src: base + "/favicon.png", alt: "favicon"}}></Html><br />
				<TabSpace n={3} /><Html tag="div"><br />
					<TabSpace n={4} /><Html tag="h3" attr={{class: "bold fs=2 fv=small-caps"}}>InstantCSS</Html><br />
					<TabSpace n={4} /><Html tag="div" attr={{class: "relative mt=-.5 w=fit-content _span/ff='Times_New_Roman',Times,serif"}}><br />
						<TabSpace n={5} /><Html tag="span">easy & rapid & intuitive</Html><br />
					<TabSpace n={4} /></Html><br />
				<TabSpace n={3} /></Html><br />
			<TabSpace n={2} /></Html><br />
		<TabSpace /></Html><br />
	</Html>
</CodePage>