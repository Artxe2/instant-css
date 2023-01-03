<script lang="ts">
import AppBar from "src/components/parts/AppBar.svelte"
import Priority from "src/components/organs/index/Priority.svelte"
import Basic from "src/components/organs/index/Basic.svelte"
import SelectorNPseudoClass from "src/components/organs/index/SelectorNPseudoClass.svelte"
import MediaQuery from "src/components/organs/index/MediaQuery.svelte"
import Abbreviation from "src/components/organs/index/Abbreviation.svelte"
import HowToUse from "src/components/organs/index/HowToUse.svelte"
import DarkMode from "src/components/organs/index/DarkMode.svelte"
import ConicGridDiv from "src/components/cells/boxs/ConicGridDiv.svelte"
import HeroSection from "src/components/organs/index/HeroSection.svelte"
import WhyUseInstantCss from "src/components/organs/index/WhatisInstantCss.svelte"
</script>

<svelte:head>
	<title>Instant CSS - Near-Atomic CSS Library</title>
</svelte:head>

<AppBar />
<ConicGridDiv>
	<div class="h=10"></div>
	<HeroSection />
	<div class="h=5"></div>
	<WhyUseInstantCss />
	<div class="h=5"></div>
	<HowToUse />
	<div class="h=5"></div>
</ConicGridDiv>
<ConicGridDiv>
	<div class="h=1"></div>
	<Basic />
	<div class="h=5"></div>
</ConicGridDiv>
<ConicGridDiv>
	<div class="h=1"></div>
	<SelectorNPseudoClass />
	<div class="h=5"></div>
</ConicGridDiv>
<ConicGridDiv>
	<div class="h=1"></div>
	<Abbreviation />
	<div class="h=5"></div>
</ConicGridDiv>
<ConicGridDiv>
	<div class="h=1"></div>
	<Priority />
	<div class="h=5"></div>
</ConicGridDiv>
<ConicGridDiv>
	<div class="h=1"></div>
	<MediaQuery />
	<div class="h=5"></div>
</ConicGridDiv>
<ConicGridDiv>
	<div class="h=1"></div>
	<DarkMode />
	<div class="h=5"></div>
</ConicGridDiv>