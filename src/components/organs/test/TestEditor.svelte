<script lang="ts">
import Style from "src/styles"
import type monaco from 'monaco-editor'
import { onMount } from "svelte"
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import LoadingCircle from "src/components/organs/animations/LoadingCircle.svelte"

let isLoading = true
let divEl: HTMLDivElement
let editor: monaco.editor.IStandaloneCodeEditor
let Monaco
let content = `<div class="ta=center">
	<div class="fs=2 bold">
		Hello
	</div>
</div>`
onMount(async () => {
	self.MonacoEnvironment = {
		getWorker: (_moduleId: any, label: string) => {
			if (label === 'json') {
				return new jsonWorker()
			}
			if (label === 'css' || label === 'scss' || label === 'less') {
				return new cssWorker()
			}
			if (label === 'html' || label === 'handlebars' || label === 'razor') {
				return new htmlWorker()
			}
			if (label === 'typescript' || label === 'javascript') {
				return new tsWorker()
			}
			return new editorWorker()
		}
	}
	Monaco = await import('monaco-editor')
	editor = Monaco.editor.create(divEl, {
		theme: "vs-dark",
		language: "html",
		value: content,
		automaticLayout: true
	})
	isLoading = false
	editor.getModel()?.onDidChangeContent(() => content = editor.getValue())
	return () => editor.dispose()
})
</script>

<div class="flex h=100% xw=100% @!sm@column">
	<div class="relative w=40% @!sm@w=100% @!sm@h=30% bd=1px_solid p=1 oy=auto {Style.scrollbar.primary}">{@html content}</div>
	<div bind:this={divEl} class="fg=1 fsk=1 xw=60% bg=--cod-gray pt=1 @!sm@xw=100% @!sm@xh=70%">
		{#if isLoading} 
			<div class="flex h=100% jc=center ai=center">
				<LoadingCircle />
			</div>
		{/if}
	</div>
</div>