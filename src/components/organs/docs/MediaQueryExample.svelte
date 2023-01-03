<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
import CssEl from "src/components/cells/texts/CssEl.svelte"
import CssValue from "src/components/cells/texts/CssValue.svelte"
import MediaQuery from "src/components/cells/texts/MediaQuery.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
</script>

<CodePage>
	<Comment>{"<!-- Automatically generated styles at runtime using MutationObserver by InstantCSS -->"}</Comment><br />
	<Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
		<TabSpace /><CssEl selector=".c\=red"><CssValue key="color" value="red" /></CssEl><br />
		<TabSpace /><CssEl selector=".fs\=16px"><CssValue key="font-size" value="16px" /></CssEl><br />
		<TabSpace /><CssEl selector="[class].fs\=16px\!"><CssValue key="font-size" value="16px" /></CssEl><br />
		<TabSpace /><MediaQuery condition="media <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>768px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@min-width\=768px\@fs\=12px"><CssValue key="font-size" value="12px" /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".\@min-width\=768px\@c\=blue"><CssValue key="color" value="blue" /></CssEl><br />
			<TabSpace n={2} /><CssEl selector=".\@min-width\=768px\@\:active\/fs\=12px:active"><CssValue key="font-size" value="1.25em" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
	</Html><br />
	. . . . . .<br />
	<Html tag="span" attr={{class: "c=red fs=16px @min-width=768px@fs=12px"}}>if width >= 768: im 12px</Html><br />
	<Html tag="span" attr={{class: "c=red @min-width=768px@c=blue fs=16px! @min-width=768px@fs=12px"}}>im blue & 16px</Html><br />
	<Html tag="span" attr={{class: "@min-width=768px@:active/fs=1.25"}}>with selector</Html><br />
</CodePage>