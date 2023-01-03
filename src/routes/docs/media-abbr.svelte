<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import MapAbbr from "src/components/cells/texts/MapAbbr.svelte"
</script>

<svelte:head>
	<title>Media Abbreviation - Instant CSS</title>
</svelte:head>

<H5>Media Abbreviation</H5>
<div class="h=1"></div>
<span>Media Abbreviations of InstantCSS.</span><br />
<!-- InstantCSS의 미디어 약어입니다. -->
<div class="h=2"></div>
<CodePage>
	<MapAbbr
		name="abbrMedias"
		json={`[
	["dark","(prefers-color-scheme:dark)"],
	["sm","(min-width:640px)"],
	["md","(min-width:768px)"],
	["lg","(min-width:1024px)"],
	["xl","(min-width:1280px)"],
	["2xl","(min-width:1536px)"]
]`}/>
</CodePage>