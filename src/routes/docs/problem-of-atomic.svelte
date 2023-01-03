<script>
import H5 from "src/components/cells/texts/H5.svelte"
</script>

<svelte:head>
	<title>Problem of Atomic - Instant CSS</title>
</svelte:head>

<H5>Problem of Atomic</H5>
<div class="h=1"></div>
<span>At first glance, atomic design, which looks like the ultimate design pattern, also faces various problems when applied to actual development.</span><br />
<!-- 언뜻 보면 디자인 패턴의 끝판왕처럼 보이는 아토믹 디자인도 실제 개발에 적용해보면 여러 문제를 마주하게 됩니다. -->
<div class="h=2"></div>
<img class="w=60% mw=20" src="https://cdn.jsdelivr.net/gh/artxe2/instant-css@main/static/imgs/atomic-design.png" alt="atomic example" />
<div class="h=1"></div>
<span>First of all, if you look at the basic structure of atomic design, it's unclear what the criteria for dividing "Molecules" and "Organisms" are, and most of the problems arise from this ambiguity.</span><br />
<!-- 우선 아토믹 디자인의 기본 구조를 보면 "Molecules"와 "Organisms"를 나누는 기준이 무엇인지 애매하며 대부분의 문제점은 이러한 애매함에서 발생합니다. -->
<span>In fact, in HTML, the default unit for atoms is tags such as {`<a> and <div>`}, but this is not important.</span><br />
<!-- 사실 HTML에서 원자에 해당하는 기본 단위는 <a>나 <div>같은 태그입니다만 이것은 중요하지 않습니다. -->
<span>ust like making water molecules out of hydrogen and oxygen atoms, we collect a few tags to make the smallest unit of design like a button, and atomic design treats it as "Atoms."</span>
<!-- 수소와 산소 원자들로 물 분자를 만들듯이 우리는 태그 몇 개를 모아 버튼과 같은 디자인의 최소 단위를 만들고 아토믹 디자인에서는 이것을 "Atoms"로 취급합니다. -->
<span>The problem is that it is difficult to classify a set of "Atoms" into two levels of components: "Molecules" and "Organisms".</span>
<!-- 문제는 "Atoms"의 집합을 "Molecules"와 "Organisms" 두 단계의 컴포넌트들로 분류하는 데에는 무리가 있다는 것입니다. -->
<div class="h=2"></div>
<img class="w=60% mw=20" src="https://cdn.jsdelivr.net/gh/artxe2/instant-css@main/static/imgs/redux.png" alt="atomic example" />
<div class="h=1"></div>
<span>In addition, Atomic Design basically presupposes separating data from design, but this is not in line with modern developments using Redux and other state management tools.</span>
<!-- 또한 Atomic Design은 기본적으로 데이터와 디자인을 분리하는 것을 전제로 하고 있지만 이것은 Redux를 비롯한 상태 관리 도구를 사용하는 요즘의 개발 방식과는 맞지 않습니다. -->