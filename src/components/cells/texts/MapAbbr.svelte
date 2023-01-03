<script lang="ts">
export let name: string
export let json: string

json = json.replace(/,/g, s => "<span>" + s + "</span>")
		.replace(/(^\[)|(]$)/g, s => "<x>" + s + "</x>")
		.replace(/\[|]/g, s => "<x>" + s + "</x>")
		.replace(/\/\*.+?\*\//g, s => "<c>" + s + "</c>")
		.replace(/\/\/.*\n/g, s => "<c>" + s + "</c>")
</script>

<pre><span class="c=--havelock-blue">let</span> <span class="c=--anakiwa">{name}</span> = <span class="c=--havelock-blue">new</span> <span class="c=--puerto-rico">Map</span><span class="c=--curious-blue">{"("}</span><span class="c=--raw-sienna >x>x/c=--gold >x/c=--bouquet >span/c=#fff >c/c=--asparagus">{@html
	json
}</span><span class="c=--curious-blue">{")"}</span></pre>