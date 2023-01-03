<script lang="ts">
export let tag: string
export let attr: {[key: string]: string} = {}
</script>

<span class="c=gray">{"<"}<span class="c=--havelock-blue">{tag}</span>{#each Object.keys(attr) as v}<span class="c=--anakiwa">{" " + v}</span><span class="c=#fff">=</span><span class="c=--raw-sienna">"{@html attr[v]}"</span>{/each}&gt;<span class="c=#fff"><slot></slot></span>&lt;/<span class="c=--havelock-blue">{tag}</span>{">"}</span>