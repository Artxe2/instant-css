<script lang="ts">
import { base } from "$app/paths"
import H1 from "src/components/cells/texts/H1.svelte"
</script>

<H1>Implement your web designs rapidly on the spot!</H1>
<!-- 즉석에서 빠르게 당신의 웹 디자인을 구현하세요! -->
<H1>It takes only 3 minutes to learn this.</H1>
<!-- 이것을 배우는데는 3분밖에 걸리지 않습니다. -->
<div class="h=3"></div>
<a href="{base}/instant-css.min.js" target="_blank">
	<button class="h=3.25 bgc=--chambray @dark@bgc=--firefly br=.5 pl=.75 pr=.75 bd=2px_solid_--chambray :hover/bgc=--havelock-blue">
		<code class="fs=1.25 bold va=top">Download</code>
		<div class="relative w=100% h=1">
			<span class="absolute fs=1 va=top tf=translate(-50%,-25%)">v0.6.7</span>
		</div>
	</button>
</a>