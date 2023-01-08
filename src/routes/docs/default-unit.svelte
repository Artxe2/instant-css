<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
</script>

<svelte:head>
	<title>Default Unit - Instant CSS</title>
</svelte:head>

<H5>Default Unit</H5>
<div class="h=1"></div>
<span>Default Unit of InstantCSS.</span><br />
<!-- InstantCSS의 기본 단위입니다. -->
<div class="h=2"></div>
<CodePage>
	<pre><Comment>/* scroll-padding-block|scroll-margin-block|scroll-padding-inline|scroll-margin-inline|border-image-outset */</Comment>
<span class="c=--havelock-blue">let</span> <span class="c=--anakiwa">abbrUnits</span> = <span class="c=--chestnut-rose">{`/(?<=(^|;|-)(background|border|bottom|column-rule|end|flex-basis|gap|grid-template-(columns|rows)|height|inset|left|margin|offset-distance|origin|outline|padding|perspective|position|radius|right|shadow|(?<!tab-)size|spacing|start|text-indent|top|vertical-align|width):([^; ]* )*?-?(\d*\.)?\d+)(?=( |;|$))/`}</span><span class="c=--havelock-blue">g</span>
<span class="c=--havelock-blue">let</span> <span class="c=--anakiwa">defaultUnit</span> = <span class="c=--raw-sienna">{`"em"`}</span></pre>
</CodePage>