<script context="module">
import { base } from "$app/paths"

export async function load() {
	return {
		status: 302,
		redirect: base + "/docs/installation"
	}
}
</script>