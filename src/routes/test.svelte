<script lang="ts">
import AppBar from "src/components/parts/AppBar.svelte"
import TestEditor from "src/components/organs/test/TestEditor.svelte"
</script>

<svelte:head>
	<title>Test - Instant CSS</title>
</svelte:head>

<div class="h=100% xh=100% bg=--chambray50 @dark@bg=--firefly">
	<AppBar />
	<div class="h=4"></div>
	<div class="h=calc(100%-4em)">
		<TestEditor />
	</div>
</div>