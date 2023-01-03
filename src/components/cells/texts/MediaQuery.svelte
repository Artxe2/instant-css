<script lang="ts">
export let condition: string
</script>

<span class="c=--bouquet">@{@html condition}</span><span class="c=--gold">{"{"}</span><span class="c=#fff"><slot></slot></span><span class="c=--gold">{"}"}</span>