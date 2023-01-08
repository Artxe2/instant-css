<script>
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import H2 from "src/components/cells/texts/H2.svelte"
import H5 from "src/components/cells/texts/H5.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import IdeFolder from "src/components/cells/texts/IdeFolder.svelte"
import IdeSvelte from "src/components/cells/texts/IdeSvelte.svelte"
import IdeTypescript from "src/components/cells/texts/IdeTypescript.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
import GithubStars from "src/components/organs/docs/GithubStars.svelte"
</script>

<svelte:head>
	<title>Atomic for InstantCSS - Instant CSS</title>
</svelte:head>

<H2>Atomic for InstantCSS</H2>
<div class="h=2"></div>
<H5>Folder structure</H5><br />
<div class="h=1"></div>
<span>First of all, InstantCSS divides components into three layers.</span><br />
<!-- 우선 InstantCSS에서는 컴포넌트를 3계층으로 구분하고 있습니다. -->
<CodePage>
	<IdeFolder name="src" /><br/>
	<TabSpace /><IdeFolder name="components" /><br />
	<TabSpace n={2} /><IdeFolder name="cells" /><br />
	<TabSpace n={2} /><IdeFolder name="organs" /><br />
	<TabSpace n={2} /><IdeFolder name="parts" /><br />
	. . . . . .
</CodePage>
<div class="h=1"></div>
<span>"cells" corresponds to "atoms" in Atomic Design, "organs" corresponds to "molecules" and "organisms", and "parts" manages components that are essentially the same as "organs" but use global status.</span><br />
<!-- "cells"는 Atomic Design의 "atoms"에, "organs"는 "molecules"와 "organisms"에 대응하며 "parts"는 "organs"와 기본적으로 동일하나 전역 상태를 사용하는 컴포넌트들을 관리합니다. -->
<div class="h=1"></div>
<span>Typically, the "cells" subfolders are separated by the type of component, subfolders of "organs" and "parts" are page-by-page.</span><br />
<!-- 일반적으로 "cells" 하위 폴더는 각각 컴포넌트의 종류에 따라 구분되며, "organs"와 "parts"의 하위 폴더는 페이지 별로 구분됩니다. -->
<CodePage>
	<IdeFolder name="src" /><br/>
	<TabSpace /><IdeFolder name="components" /><br />
	<TabSpace n={2} /><IdeFolder name="cells" /><br />
	<TabSpace n={3} /><IdeFolder name="buttons" /><br />
	<TabSpace n={4} /><IdeSvelte name="SomeButton" /><br />
	<TabSpace n={3} /><IdeFolder name="svgs" /><br />
	<TabSpace n={4} /><IdeSvelte name="i_someSvg" /><br />
	<TabSpace n={2} /><IdeFolder name="organs" /><br />
	<TabSpace n={3} /><IdeFolder name="docs" /><br />
	<TabSpace n={4} /><IdeFolder name="buttons" /><br />
	<TabSpace n={5} /><IdeSvelte name="SomeDocsButton" /><br />
	<TabSpace n={4} /><IdeSvelte name="SomeDocsComponent" /><br />
	<TabSpace n={3} /><IdeFolder name="index" /><br />
	<TabSpace n={4} /><IdeSvelte name="SomeIndexComponent" /><br />
	<TabSpace n={3} /><IdeSvelte name="SomeCommonComponent" /><br />
	<TabSpace n={2} /><IdeFolder name="parts" /><br />
	<TabSpace n={3} /><IdeFolder name="docs" /><br />
	<TabSpace n={4} /><IdeSvelte name="SomeDocsComponent" /><br />
	<TabSpace n={4} /><IdeTypescript name="store" /><br />
	<TabSpace n={3} /><IdeFolder name="index" /><br />
	<TabSpace n={4} /><IdeSvelte name="SomeIndexComponent" /><br />
	<TabSpace n={4} /><IdeTypescript name="store" /><br />
	<TabSpace n={3} /><IdeSvelte name="SomeCommonComponent" /><br />
	<TabSpace n={3} /><IdeTypescript name="store" /><br />
	. . . . . .
</CodePage>
<div class="h=1"></div>
<span>For example, the component below named "GithubStars" uses data binding, but does not use the global state, and therefore corresponds to "organs".</span><br />
<!-- 예를 들어 "GithubStars"라는 이름의 아래 컴포넌트는 데이터바인딩을 사용하고 있지만 전역 상태를 사용하지 않으며 따라서 "organs"에 해당합니다. -->
<CodePage>
	<GithubStars />
</CodePage>
<div class="h=2"></div>
<H5>Component Rules</H5><br />
<div class="h=1"></div>
<span>By default, InstantCSS can easily customize the style of components using selectors.</span><br />
<!-- 기본적으로 InstantCSS는 선택자를 이용하여 손쉽게 컴포넌트의 스타일을 커스터마이징 할 수 있습니다. -->
<CodePage>
	<Html tag="div" attr={{ class: ">div>a/br=.75 _*/f=blue _.c\\=\\#333/c=blue" }}><br />
		<TabSpace /><span class="c=gray">{"<"}</span><span class="c=--puerto-rico">GithubStars</span> <span class="c=gray">/{">"}</span><br />
	</Html>
	<div class="h=1"></div>
	<div class=">div>a/br=.75 _*/f=blue _.c\=\#333/c=blue">
		<GithubStars />
	</div>
</CodePage>
<span>However, InstantCSS recommends separating components from layouts and delegating layouts to parent components.</span><br />
<!-- 하지만 InstantCSS는 컴포넌트를 레이아웃과 분리하고 레이아웃을 상위 컴포넌트에 위임하는 것을 권장합니다. -->
<span>To do this, the "width" and "height" of the component should be "100%" or "fit-content", the "margin" should be "0", and the "position" should be any property other than "absolute".</span>
<!-- 이를 위해 컴포넌트의 "width"과 "height"는 "100%" 또는 "fit-content"이어야 하며 "margin"은 "0"이어야 하고 "position"는 "absolute"가 아닌 다른 속성이어야 합니다. -->
<div class="h=2"></div>
<H5>Responsive Web Design</H5><br />
<div class="h=1"></div>
<span>InstantCSS recommends using "em" as the default unit.</span><br />
<!-- InstantCSS에서는 기본 단위로 "em"을 사용하는 것을 권장합니다. -->
<span>This website provides a responsive web by adjusting the "font size" according to "device width" as shown below.</span><br />
<!-- 이 웹사이트에서는 아래와 같이 "device width"에 따라 "font size"를 조정하여 반응형 웹을 제공하고 있습니다. -->
<CodePage>
	. . . . . .<br />
	<Html tag="body" attr={{ class: "fs=12px @sm@fs=14px @md@fs=16px @lg@fs=18px @xl@fs=20px @2xl@fs=24px"}}><br />
		<TabSpace /><Html tag="div" attr={{ class: "h=100% ox=hidden . . ."}}><br />
			<TabSpace n={2} />. . . . . .<br />
		<TabSpace /></Html><br />
		<TabSpace /><span class="c=--asparagus">{"<!--<RootDiv>-->"}</span><br />
	</Html>
</CodePage>