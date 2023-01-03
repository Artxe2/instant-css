<script lang="ts">
import H3 from "src/components/cells/texts/H3.svelte"
import TextLink from "src/components/cells/buttons/TextLink.svelte"
import DarkModeExample from "src/components/organs/docs/DarkModeExample.svelte"
</script>

<H3>Dark Mode</H3>
<span>InstantCSS dynamically render stylesheets based on the "THEME" values in local storage.</span><br />
<!-- InstantCSS는 로컬스토리지의 "THEME" 값에 따라 동적으로 스타일시트를 작성합니다. -->
<span>You can easily apply a dark mode design to elements by using "@dark@" to apply dark mode as a media query and manipulating local storage.</span><br />
<!-- "@dark@"를 이용하여 다크모드를 미디어 쿼리로 적용하고 로컬 스토리지를 조작하면 요소에 손쉽게 다크모드 디자인을 적용할 수 있습니다. -->
<TextLink href="/docu/dark-mode">dark mode</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80% m=auto">
	<DarkModeExample />
</div>