<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
</script>

<CodePage>
	<Comment>{"<!-- By default, class names behave like inline styles -->"}</Comment><br />
	<Html tag="span" attr={{class: "background-color:red color:blue"}}>I'm white letters on a red background</Html><br />
	<br />
	<Comment>{"<!-- Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces."}<br />{"A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference -->"}</Comment><br />
	<Html tag="span" attr={{class: "border=1px_solid_black"}}>I'm black line border</Html><br />
	<br />
	<Comment>{"<!-- Multiple styles or other attributes are also freely applicable in basic grammar -->"}</Comment><br />
	<Html tag="span" attr={{class: "color=red;font-size=calc(8px*2)!important"}}>I'm red letters and 12px is important</Html><br />
</CodePage>