<script lang="ts">
import H5 from "src/components/cells/texts/H5.svelte"
import MediaQueryAbbrExample from "src/components/organs/docs/MediaQueryAbbrExample.svelte"
import MediaQueryExample from "src/components/organs/docs/MediaQueryExample.svelte"
import MediaQueryMultiExample from "src/components/organs/docs/MediaQueryMultiExample.svelte"
import MediaQueryNotExample from "src/components/organs/docs/MediaQueryNotExample.svelte"
</script>

<svelte:head>
	<title>Media Query - Instant CSS</title>
</svelte:head>

<H5>Media Query</H5>
<div class="h=1"></div>
<span>To apply a media query, you can write a queries between two at"@" in before the class name.</span><br />
<!-- 미디어쿼리를 적용하기 위해서는 클래스 명 앞 앳"@" 두 개 사이에 쿼리를 작성하면 됩니다. -->
<span>Media queries are written later to gain priority and are grouped with the same class name.</span><br />
<!-- 미디어쿼리는 나중에 작성됨으로써 우선순위를 얻으며 같은 클래스명끼리 묶입니다. -->
<MediaQueryExample />
<div class="h=2"></div>
<span>If it does not contain underscores"_", it is automatically a media query and you can use exclamation mark"!" instead of not.</span>
<!-- 언더바"_"를 포함하지 않는 경우 자동으로 미디어쿼리가 되며 not 대신 느낌표"!"를 사용할 수 있습니다. -->
<MediaQueryNotExample />
<div class="h=2"></div>
<span>If you include an underscore"_", the query is applied as is, and if you add another at"@", it becomes a media query.</span><br />
<!-- 언더바"_"를 포함하는 경우 쿼리가 그대로 적용되며 앳"@"을 하나 더 붙이면 미디어 쿼리가 됩니다. -->
<MediaQueryMultiExample />
<div class="h=2"></div>
<span>Also, in media queries, you can shorten typing by using some abbreviations such as "md" or "dark" and range expressions using tilde"~".</span><br />
<!-- 또한 미디어 쿼리에서도 몇 가지 약어와 물결표"~"를 이용한 범위 표현을 이용해 타이핑을 단축시킬 수 있습니다. -->
<MediaQueryAbbrExample />