<script lang="ts">
import H2 from "src/components/cells/texts/H2.svelte"
import Html from "src/components/cells/texts/Html.svelte"
import TabSpace from "src/components/cells/texts/TabSpace.svelte"
import CodePage from "src/components/cells/boxs/CodePage.svelte"
import TextLink from "src/components/cells/buttons/TextLink.svelte"
import Comment from "src/components/cells/texts/Comment.svelte"
import CssEl from "src/components/cells/texts/CssEl.svelte"
import CssValue from "src/components/cells/texts/CssValue.svelte"
import { onMount } from "svelte"

let index = 0
let text1 = "fs=1.5"
let class1 = ""
let text2 = "ts=0_0_1_red"
let class2 = ""
let text3 = ":after/ct='!';inline-block;ml=.1;fs=2;tfo=center_.5"
let class3 = ""
let text4 = ":after/a=hello_1s_infinite_linear"
let class4 = ""
const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const next = async () => {
	index = 0
	class1 = ""
	class2 = ""
	class3 = ""
	class4 = ""
	await sleep(2000)
	index++
	(async () => {
		for (let i = 0; i < text1.length; i++) {
			if (index) class1 += text1.charAt(i)
			else return
			await sleep(30)
		}
	})()
	await sleep(800)
	index++
	(async () => {
		for (let i = 0; i < text2.length; i++) {
			if (index) class2 += text2.charAt(i)
			else return
			await sleep(30)
		}
	})()
	await sleep(1300)
	index++
	(async () => {
		for (let i = 0; i < text3.length; i++) {
			if (index) class3 += text3.charAt(i)
			else return
			await sleep(30)
		}
	})()
	await sleep(2000)
	index++
	(async () => {
		for (let i = 0; i < text4.length; i++) {
			if (index) class4 += text4.charAt(i)
			else return
			await sleep(30)
		}
	})()
	await sleep(2000)
	index++
	await sleep(2000)
	next()
}
onMount(next)
</script>

<style>
	@keyframes -global-blink {
		50% { opacity: 0 }
	}
	@keyframes -global-hello {
		0% { transform: rotate(0deg) }
		10% { transform: rotate(-6deg) }
		20% { transform: rotate(-9deg) }
		25% { transform: rotate(-10deg) }
		30% { transform: rotate(-9deg) }
		40% { transform: rotate(-6deg) }
		60% { transform: rotate(6deg) }
		70% { transform: rotate(9deg) }
		75% { transform: rotate(10deg) }
		80% { transform: rotate(9deg) }
		90% { transform: rotate(6deg) }
		100% { transform: rotate(0deg) }
	}
</style>

<H2>How to use</H2>
<span class="relative">Install InstantCSS and add inside your head tag.</span>
<!-- InstantCSS를 설치하고 head 태그 안에 추가하세요. 이게 전부입니다. -->
<div class="h=.5"></div>
<div class="relative h=2">
	<div class="absolute r=50% b=50% tf=translate(50%,50%)">
		<code class="lh=0{index > 0 ? " " + text1 : ""}{index > 1 ? " " + text2 : ""}{index > 2 ? " " + text3 : ""}{index > 3 ? " " + text4 : ""}">that's all</code><br />
	</div>
</div>
<TextLink href="/docu/installation">installation</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80% m=auto">
	<CodePage>
		<Html tag="head"><br />
			<TabSpace />. . . . . .<br />
			<TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
			<TabSpace /><Comment>{"<!-- Automatically generated styles at runtime using MutationObserver by InstantCSS -->"}</Comment><br />
			<TabSpace /><Html tag="style" attr={{"instant-css": "v0.6.7"}}><br />
				<TabSpace n={2} />. . . . . .<br />
				<TabSpace n={2} /><span class="op={index < 1 ? "0" : "1 tt=1s_linear"}"><CssEl selector=".fs\=1\.5"><CssValue key="font-size" value="1.5em" /></CssEl><br /></span>
				<TabSpace n={2} /><span class="op={index < 2 ? "0" : "1 tt=1s_linear"}"><CssEl selector=".ts\=0_0_1_red"><CssValue key="text-shadow" value="0 0 1em red" /></CssEl><br /></span>
				<TabSpace n={2} /><span class="op={index < 3 ? "0" : "1 tt=1s_linear"}"><CssEl selector=".\:after\/ct\=\'\!\'\;inline-block\;ml\=\.1\;fs\=2\;tfo\=center_\.5:after"><CssValue key="content" value="'!'" />;<CssValue key="display" value="inline-block" />;<CssValue key="margin-left" value=".1em" />;<CssValue key="font-size" value="2em" />;<CssValue key="transform-origin" value=".5em" /></CssEl><br /></span>
				<TabSpace n={2} /><span class="op={index < 4 ? "0" : "1 tt=1s_linear"}"><CssEl selector=".\:after\/a\=hello_1s_infinite_linear:after"><CssValue key="animation" value="hello 1s infinite linear" /></CssEl><br /></span>
			<TabSpace /></Html><br />
		</Html><br />
		<Html tag="body"><br />
			<TabSpace />. . . . . .<br />
			<TabSpace /><span class="_.foldable/relative;tt=1s
			_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\00a0';bg=--cod-gray
			_.foldable:after/c=#fff;m=-.25;fs=1.5;lh=.8;a=blink_1s_step-end_infinite
			{index === 1 ? "_.foldable:nth-child(1)/bg=--astronaut" : ""}
			{index < 2 ? "_.foldable:nth-child(1):after/ct='|'" : ""}
			{index === 2 ? "_.foldable:nth-child(2)/bg=--astronaut _.foldable:nth-child(2):after/ct='|'" : ""}
			{index === 3 ? "_.foldable:nth-child(3)/bg=--astronaut _.foldable:nth-child(3):after/ct='|'" : ""}
			{index === 4 ? "_.foldable:nth-child(4)/bg=--astronaut" : ""}
			{index > 3 ? "_.foldable:nth-child(4):after/ct='|'" : ""}"><Html tag="span" attr={
				{class: `<span class="foldable">${class1}</span><span class="foldable">${class2}</span><span class="foldable">${class3}</span><span class="foldable">${class4}</span>`}
			}>that's all</Html></span><br />
		</Html>
	</CodePage>
</div>