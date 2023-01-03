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
		<TabSpace /><MediaQuery condition="media not <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>640px</span>)</span> and <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>767px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@\!width\=640\~767px\@fs\=10px"><CssValue key="font-size" value="10px" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
		<TabSpace /><MediaQuery condition="media <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>768px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@md\@fs\=12px"><CssValue key="font-size" value="12px" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
		<TabSpace /><MediaQuery condition="media not <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>768px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@\!md\@fs\=12px"><CssValue key="font-size" value="12px" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
		<TabSpace /><MediaQuery condition="media <span class='c=--gold'>(<span class='c=--anakiwa'>prefers-color-scheme</span>:<span class='c=--raw-sienna'>dark</span>)</span> and <span class='c=--gold'>(<span class='c=--anakiwa'>min-width</span>:<span class='c=--raw-sienna'>768px</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@\@dark_and_md\@fs\=12px"><CssValue key="font-size" value="12px" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
	</Html><br />
	. . . . . .<br />
	<Html tag="span" attr={{class: "@!width=640~767px@fs=10px"}}>range</Html><br />
	<Html tag="span" attr={{class: "@md@fs=12px"}}>abbreviation</Html><br />
	<Html tag="span" attr={{class: "@!md@fs=12px"}}>abbreviation2</Html><br />
	<Html tag="span" attr={{class: "@@dark_and_md@fs=12px"}}>abbreviation3</Html><br />
</CodePage>