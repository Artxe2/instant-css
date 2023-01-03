<script lang="ts">
import { base } from "$app/paths"

export let href: string
export let target = ""
</script>

<a href="{/^\//.test(href) ? base : ""}{href}" target={target}>
	<button class="c=#f40 @dark@c=#fd6 :hover/c=--chambray @dark@:hover/c=--havelock-blue">
		<slot></slot>
	</button>
</a>