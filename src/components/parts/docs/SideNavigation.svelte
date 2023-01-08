<script lang="ts">
import Style from "src/styles"
import { base } from "$app/paths"
import { page } from "$app/stores"
import NavigationSection from "src/components/organs/docs/NavigationSection.svelte"
import { naviOpen$ } from "src/components/parts/docs/store"

const useActive = (e: HTMLAnchorElement) => {
	page.subscribe(v => {
		let active = (location.origin + v.url.pathname).startsWith(e.href)
		e.classList.toggle("bold", active)
		e.classList.toggle("c=--chambray", active)
		e.classList.toggle("@dark@c=--havelock-blue", active)
	})
}
</script>

<div class="relative">
	<div class="@!md@absolute @!md@tt=margin-left_.5s bg=#fff bdr=1px_solid_#dddddd50 @dark@bg=--firefly w=20 ml=0 h=100%{$naviOpen$ ? "" : " @!md@ml=-20"}">
		<div class="pl=1.5 h=100% oy=auto {Style.scrollbar.primary}">
			<div class="h=2"></div>
			<ul>
				<li>
					<a href="{base}/docs" use:useActive>
						<button class=":hover/c=--chambray @dark@:hover/c=--havelock-blue">Documentation</button>
					</a>
				</li>
				<li>
					<a href="{base}/ui" use:useActive>
						<button class=":hover/c=--chambray @dark@:hover/c=--havelock-blue fv=small-caps">InstantUI</button>
					</a>
				</li>
				<li>
					<a href="{base}/resources" use:useActive>
						<button class=":hover/c=--chambray @dark@:hover/c=--havelock-blue">Resources</button>
					</a>
				</li>
				{#if $page.url.pathname.startsWith(base + "/docs")}
				<NavigationSection
					title="Getting Started"
					list={[
						{ href: base + "/docs/installation", text: "Installation" }
					]}
				/>
				<NavigationSection
					title="Core Concepts"
					list={[
						{ href: base + "/docs/utility-first", text: "Utility-First Fundamentals" },
						{ href: base + "/docs/runtime-render", text: "Runtime Render Style" },
						{ href: base + "/docs/basic", text: "Basic" },
						{ href: base + "/docs/selector", text: "Selector & Pseudo Class" },
						{ href: base + "/docs/abbreviation", text: "Abbreviation" },
						{ href: base + "/docs/priority", text: "Priority" },
						{ href: base + "/docs/media-query", text: "Media Query" },
						{ href: base + "/docs/dark-mode", text: "Dark mode" }
					]}
				/>
				<NavigationSection
					title="Customizing"
					list={[
						{ href: base + "/docs/css-reset", text: "CSS Reset" },
						{ href: base + "/docs/key-abbr", text: "Key Abbreviation" },
						{ href: base + "/docs/value-abbr", text: "Value Abbreviation" },
						{ href: base + "/docs/media-abbr", text: "Media Abbreviation" },
						{ href: base + "/docs/default-unit", text: "Default Unit" }
					]}
				/>
				<NavigationSection
					title="Atomic Design"
					list={[
						{ href: base + "/docs/what-is-atomic", text: "What is Atomic Design" },
						{ href: base + "/docs/problem-of-atomic", text: "Problem of Atomic" },
						{ href: base + "/docs/atomic-for-instant", text: "Atomic for Instant CSS" }
					]}
				/>
				{:else if $page.url.pathname.startsWith(base + "/ui")}
				<NavigationSection
					title="Components"
					list={[
						{ href: base + "/ui/carousel-slider", text: "Carousel Slider" },
						{ href: base + "/ui/drag-and-drop", text: "Drag and Drop" },
						{ href: base + "/ui/infinite-scroll", text: "Infinite Scroll" }
					]}
				/>
				{/if}
			</ul>
			<div class="h=2"></div>
		</div>
	</div>
</div>