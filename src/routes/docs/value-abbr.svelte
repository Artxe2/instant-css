<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import MapAbbr from "src/components/cells/texts/MapAbbr.svelte"
</script>

<svelte:head>
	<title>Value Abbreviation - Instant CSS</title>
</svelte:head>

<H5>Value Abbreviation</H5>
<div class="h=1"></div>
<span>Value Abbreviations of InstantCSS.</span><br />
<!-- InstantCSS의 밸류 약어입니다. -->
<div class="h=2"></div>
<CodePage>
	<MapAbbr
		name="abbrValues" 
		json={`[
	/* cursor */
	["not-allowed","cursor:not-allowed"],
	["pointer","cursor:pointer"],
	["wait","cursor:wait"],
	/* display */
	["block","display:block"],
	["flex","display:flex"],
	["grid","display:grid"],
	["inline","display:inline"],
	["inline-block","display:inline-block"],
	["inline-flex","display:inline-flex"],
	["none","display:none"],
	/* flex-direction */
	["column","flex-direction:column"],
	["column-reverse","flex-direction:column-reverse"],
	["row","flex-direction:row"],
	["row-reverse","flex-direction:row-reverse"],
	/* font-weight */
	["bold","font-weight:bold"],
	/* position */
	["absolute","position:absolute"],
	["fixed","position:fixed"],
	["relative","position:relative"],
	["static","position:static"],
	["sticky","position:sticky"],
	/* visibility */
	["hidden","visibility:hidden"]
]`} />
</CodePage>