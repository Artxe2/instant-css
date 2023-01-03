<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
import CssEl from "src/components/cells/texts/CssEl.svelte"
import CssValue from "src/components/cells/texts/CssValue.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
</script>

<CodePage>
	<Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
		<TabSpace /><CssEl selector="<span class='bold'>[class][class][class]</span>.c\=yellow\!\!\!"><CssValue key="color" value="yellow" /></CssEl><br />
		<TabSpace /><CssEl selector="<span class='bold'>[class][class]</span>.c\=orange\!\!"><CssValue key="color" value="orange" /></CssEl><br />
		<TabSpace /><CssEl selector="<span class='bold'>[class]</span>.c\=red\!"><CssValue key="color" value="red" /></CssEl><br />
		<TabSpace /><CssEl selector=".\>span\/c\=red>span"><CssValue key="color" value="red" /></CssEl><br />
		<TabSpace /><CssEl selector=".c\=blue"><CssValue key="color" value="blue" /></CssEl><br />
		<TabSpace /><CssEl selector="<span class='bold'>[class]</span>.c\=blue\!"><CssValue key="color" value="blue" /></CssEl><br />
	</Html><br />
	<br />
	<Comment>{"<!-- If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important -->"}</Comment><br />
	<Html tag="span" attr={{class: "c=yellow!!! c=orange!! c=red!"}}>i'm a yellow</Html><br />
	<Html tag="div" attr={{class: ">span/c=red"}}><br />
		<TabSpace /><Html tag="span">i'm a red</Html><br />
		<TabSpace /><Html tag="span" attr={{class: "c=blue"}}>i'm a red</Html><br />
		<TabSpace /><Html tag="span" attr={{class: "c=blue!"}}>i'm a blue</Html><br />
	</Html><br />
</CodePage>