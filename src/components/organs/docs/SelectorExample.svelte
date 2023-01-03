<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
</script>

<CodePage>
	<Comment>{"<!-- Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles -->"}</Comment><br />
	<Html tag="div" attr={{class: ">span.target/bgc=red _:nth-child(2n+1)/bgc=blue"}}><br />
		<TabSpace /><Html tag="span">I'm a blue background</Html><br />
		<TabSpace /><Html tag="span" attr={{class: "target"}}>target</Html><br />
		<TabSpace /><Html tag="span">I'm a blue background</Html><br />
		<TabSpace /><Html tag="span">I'm no style applied</Html><br />
	</Html><br />
	<br />
	<Comment>{"<!-- The pseudo class is also applied in the same way as the selector -->"}</Comment><br />
	<Html tag="span" attr={{class: ":active/bgc=blue;c=red"}}>When I activate, I become a red letters on a blue background</Html><br />
</CodePage>