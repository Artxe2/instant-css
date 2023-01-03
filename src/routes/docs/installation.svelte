<script lang="ts">
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import BoxButton from "src/components/cells/buttons/BoxButton.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
</script>

<svelte:head>
	<title>Installation - Instant CSS</title>
</svelte:head>

<H5>Installation</H5>
<div class="h=1"></div>
<span>InstantCSS can download both compressed and original files.</span><br />
<!-- InstantCss는 압축 파일과 원본 파일을 모두 다운로드 할 수 있습니다. -->
<span>The uncompressed file is can be used for development or debugging, the compressed file saves bandwidth and improves performance in production.</span>
<!-- 압축되지 않은 파일은 개발 또는 디버깅용으로 사용할 수 있으며, 압축 파일은 대역폭을 절약하고 프로덕션 성능을 향상시킵니다. -->
<div class="h=1"></div>
<BoxButton href="/instant-css.min.js" target="_blank">
	<span class="fs=1 bold va=bottom">instant-css.min.js</span> <span>v0.6.7</span>
</BoxButton>
<span>compressed for production</span>
<div class="h=1"></div>
<BoxButton href="/instant-css.js" target="_blank">
	<span class="fs=1 bold va=bottom">instant-css.js</span> <span>v0.6.7</span>
</BoxButton>
<span>uncompressed for development</span>
<div class="h=1"></div>
<CodePage>
	<Html tag="head"><br />
		<TabSpace />. . . . . .<br />
		<TabSpace /><Html tag="script" attr={{src: "/instant-css.min.js"}}></Html> <span class="c=--asparagus">/* Add instant-css inside your head tag */</span><br />
	</Html><br />
	<Html tag="body"><br />
		<TabSpace />. . . . . .<br />
	</Html>
</CodePage>
<pre>{`
MIT License

Copyright (c) 2022 Artxe2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`}</pre>