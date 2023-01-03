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
	<Comment>{"<!-- In light theme, dark mode styles are disabled -->"}</Comment><br />
	<Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
		<TabSpace /><CssEl selector=".c\=red"><CssValue key="color" value="red" /></CssEl><br />
	</Html><br />
	<br />
	<Comment>{"<!-- In dark theme, dark mode styles are applied without media queries -->"}</Comment><br />
	<Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
		<TabSpace /><CssEl selector=".c\=red"><CssValue key="color" value="red" /></CssEl><br />
		<TabSpace n={2} /><CssEl selector=".\@dark\@c\=blue"><CssValue key="color" value="blue" /></CssEl><br />
	</Html><br />
	<br />
	<Comment>{"<!-- In system theme, the dark mode style is applied as a media query -->"}</Comment><br />
	<Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
		<TabSpace /><CssEl selector=".c\=red"><CssValue key="color" value="red" /></CssEl><br />
		<TabSpace /><MediaQuery condition="media <span class='c=--gold'>(<span class='c=--anakiwa'>prefers-color-scheme</span>:<span class='c=--raw-sienna'>dark</span>)</span>"><br />
			<TabSpace n={2} /><CssEl selector=".\@dark\@c\=blue"><CssValue key="color" value="blue" /></CssEl><br />
		<TabSpace /></MediaQuery><br />
	</Html><br />
	<br />
	<Html tag="span" attr={{class: "c=red @dark@c=blue"}}>I'm red letters, but in dark mode, I'm blue letters</Html><br />
	<br />
	<Html tag="script"><br />
		<TabSpace /><span class="c=--anakiwa">localStorage</span>.<span class="c=--beeswax">setItem</span><span class="c=--bouquet">(</span><span class="c=--raw-sienna">"THEME"</span>, <span class="c=--raw-sienna">"LIGHT"</span><span class="c=--bouquet">)</span> <Comment>// if THEME is not DARK and true, light theme is applied</Comment><br />
		<TabSpace /><span class="c=--anakiwa">localStorage</span>.<span class="c=--beeswax">setItem</span><span class="c=--bouquet">(</span><span class="c=--raw-sienna">"THEME"</span>, <span class="c=--raw-sienna">"DARK"</span><span class="c=--bouquet">)</span> <Comment>// if THEME is DARK, dark theme is applied</Comment><br />
		<TabSpace /><span class="c=--anakiwa">localStorage</span>.<span class="c=--beeswax">removeItem</span><span class="c=--bouquet">(<span class="c=--raw-sienna">"THEME"</span>)</span> <Comment>// if THEME is false, theme is follow system settings</Comment><br />
		<TabSpace /><span class="c=--anakiwa">window</span><span class="c=--bouquet">[<span class="c=--raw-sienna">"instantCss"</span>]()</span> <Comment>// update style sheet</Comment><br />
	</Html>
</CodePage>