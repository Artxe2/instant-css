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
		<TabSpace /><MediaQuery condition="container <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>768px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@container_min-width\=768px\@fs\=10px"><CssValue key="font-size" value="10px" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
		<TabSpace /><MediaQuery condition="media screen and <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>768px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@\@screen_and_min-width\=768px\@fs\=10px"><CssValue key="font-size" value="10px" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
	</Html><br />
	. . . . . .<br />
	<Html tag="span" attr={{class: "@container_min-width=768px@fs=10px"}}>container()</Html><br />
	<Html tag="span" attr={{class: "@@screen_and_min-width=768px@fs=10px"}}>multi width @</Html><br />
</CodePage>