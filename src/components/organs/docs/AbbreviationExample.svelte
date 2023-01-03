<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
</script>

<CodePage>
	<Comment>{"<!-- For convenience, you can enter (=) instead of (:) -->"}</Comment><br />
	<Html tag="div" attr={{class: "background=red"}}>background:red</Html><br />
	<br />
	<Comment>{"<!-- You can abbreviate and use properties with abbreviations -->"}</Comment><br />
	<Html tag="span" attr={{class: "bgc=blue"}}>background-color:blue</Html><br />
	<br />
	<Comment>{"<!-- You can abbreviate and use value too with abbreviations -->"}</Comment><br />
	<Html tag="span" attr={{class: "pointer"}}>cursor:pointer</Html><br />
	<br />
	<Comment>{"<!-- The default unit is applied to styles such as width and height -->"}</Comment><br />
	<Html tag="div" attr={{class: "bg=blue w=10"}}>background:blue width:10em</Html><br />
	<br />
	<Comment>{"<!-- When you use minus(-) or plus(+) in the calc function, spaces are automatically added -->"}</Comment><br />
	<Html tag="span" attr={{class: "fs=calc(30px-5px)"}}>font-size:calc(30px - 5px)</Html><br />
	<br />
	<Comment>{"<!-- Values starting with two hyphens automatically wrap the var function. -->"}</Comment><br />
	<Html tag="div" attr={{class: "bg=--chambray"}}>background:var(--chambray)</Html><br />
</CodePage>