<script lang="ts">
import AppBar from "src/components/parts/AppBar.svelte"
import SideNavigation from "src/components/parts/docs/SideNavigation.svelte"
import NaviOpenButton from "src/components/parts/docs/NaviOpenButton.svelte"
import DocumentContentDiv from "src/components/parts/docs/DocumentContentDiv.svelte"
</script>

<div class="bg=--chambray20 @dark@bg=--firefly h=100% xw=100%">
	<AppBar />
	<div class="h=4"></div>
	<div class="flex row h=calc(100%-4em)">
		<NaviOpenButton />
		<SideNavigation />
		<div class="fg=1 fsk=1">
			<DocumentContentDiv>
				<slot></slot>
			</DocumentContentDiv>
		</div>
	</div>
</div>