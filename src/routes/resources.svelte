<script lang="ts">
import AppBar from "src/components/parts/AppBar.svelte"
import SideNavigation from "src/components/parts/docs/SideNavigation.svelte"
import NaviOpenButton from "src/components/parts/docs/NaviOpenButton.svelte"
import BoxButton from "src/components/cells/buttons/BoxButton.svelte"
import DocumentContentDiv from "src/components/parts/docs/DocumentContentDiv.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
</script>

<svelte:head>
	<title>Resources - Instant CSS</title>
</svelte:head>

<div class="bg=--chambray20 @dark@bg=--firefly h=100% xw=100%">
	<AppBar />
	<div class="h=4"></div>
	<div class="flex row h=calc(100%-4em)">
		<NaviOpenButton />
		<SideNavigation />
		<div class="fg=1 fsk=1">
			<DocumentContentDiv>
				<H5>Resources</H5>
				<div>
					<span>Useful resources used by InstantCSS.</span><br />
					<!-- InstantCSS에서 사용한 유용한 리소스들입니다. -->
				</div>
				<div class="h=1"></div>
				<BoxButton href="https://developer.mozilla.org" target="_blank">
					<span class="fs=1 bold va=bottom">MDN Web Docs</span>
				</BoxButton>
				<span>web standards informations</span>
				<div class="h=1"></div>
				<BoxButton href="https://papago.naver.com" target="_blank">
					<span class="fs=1 bold va=bottom">papago</span>
				</BoxButton>
				<span>translator</span>
				<div class="h=1"></div>
				<BoxButton href="https://microsoft.github.io/monaco-editor" target="_blank">
					<span class="fs=1 bold va=bottom">Monaco Editor</span>
				</BoxButton>
				<span>code editor that powers VS Code</span>
				<div class="h=1"></div>
				<BoxButton href="https://skalman.github.io/UglifyJS-online" target="_blank">
					<span class="fs=1 bold va=bottom">UglifyJS 3</span>
				</BoxButton>
				<span>javascript minifier</span>
				<div class="h=1"></div>
				<BoxButton href="https://chir.ag/projects/name-that-color" target="_blank">
					<span class="fs=1 bold va=bottom">Name that Color</span>
				</BoxButton>
				<span>get color name by hexcode</span>
				<div class="h=1"></div>
				<BoxButton href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk" target="_blank">
					<span class="fs=1 bold va=bottom">Lighthouse</span>
				</BoxButton>
				<span>web diagnostics tool</span>
				<div class="h=1"></div>
				<BoxButton href="https://getsharex.com" target="_blank">
					<span class="fs=1 bold va=bottom">ShareX</span>
				</BoxButton>
				<span>screen capture, file sharing and productivity tool</span>
			</DocumentContentDiv>
		</div>
	</div>
</div>