<script lang="ts">
import { base } from "$app/paths"

export let href: string
export let target = ""
</script>
<a href="{/^\//.test(href) ? base : ""}{href}" target={target}>
	<button class="h=2 bg=--chambray @dark@bg=--firefly br=.25 pl=.75 pr=.75 bd=2px_solid_--chambray :hover/bg=--havelock-blue">
		<slot></slot>
	</button>
</a>