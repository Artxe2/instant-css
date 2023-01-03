<script lang="ts">
import H3 from "src/components/cells/texts/H3.svelte"
import TextLink from "src/components/cells/buttons/TextLink.svelte"
import PriorityExample from "src/components/organs/docs/PriorityExample.svelte"
</script>

<H3>Priority</H3>
<span>Using utility-first css can greatly reduce css conflicts, but still sometimes messes up the order of applying styles.</span><br />
<!-- 유틸리티 우선 css를 사용하면 css충돌이 일어나는 경우를 크게 줄일 수 있지만 그래도 스타일 적용 순서가 꼬이는 경우가 있습니다. -->
<span>Instant supports the ability to easily adjust style priorities using the exclamation mark"!".</span><br />
<!-- InstantCSS에서는 느낌표"!"를 이용하여 스타일 우선순위를 간편하게 조정할 수 있는 기능을 지원합니다. -->
<TextLink href="/docu/priority">priority</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80% m=auto">
	<PriorityExample />
</div>