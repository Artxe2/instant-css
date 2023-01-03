<script lang="ts">
import TextLink from "src/components/cells/buttons/TextLink.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import AbbreviationExample from "src/components/organs/docs/AbbreviationExample.svelte"
</script>

<svelte:head>
	<title>Abbreviation - Instant CSS</title>
</svelte:head>

<H5>Abbreviation</H5>
<div class="h=1"></div>
<TextLink href="/docu/key-abbr">key abbreviation</TextLink><br />
<TextLink href="/docu/value-abbr">value abbreviation</TextLink><br />
<TextLink href="/docu/media-abbr">media abbreviation</TextLink>
<div class="h=1"></div>
<AbbreviationExample />