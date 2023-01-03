<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
</script>

<svelte:head>
	<title>CSS Reset - Instant CSS</title>
</svelte:head>

<H5>CSS Reset</H5>
<div class="h=1"></div>
<span>CSS Reset of InstantCSS.</span><br />
<!-- InstantCSS의 CSS Reset입니다. -->
<div class="h=2"></div>
<CodePage>
	<pre><span class="c=--havelock-blue">let</span> <span class="c=--anakiwa">style</span> = <span class="c=--raw-sienna">{`\`*{margin:0;padding:0;font:inherit;color:inherit}
*,:after,:before{box-sizing:border-box;flex-shrink:0}
html,body{height:100%;max-height:100%}
ol,ul,menu,dir{list-style:none}
img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}
button{background:none;border:0;cursor:pointer}
a{text-decoration:none}
b,strong{font-weight:bold}
pre{#fff-space:pre-wrap}
table{border-collapse:collapse;border-spacing:0}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}
\``}</span></pre>
</CodePage>