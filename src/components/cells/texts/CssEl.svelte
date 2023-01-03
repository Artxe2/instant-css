<script lang="ts">
export let selector: string
</script>

<span class="c=--laser">{@html selector}</span><span class="c=--gold">{"{"}</span><span class="c=#fff"><slot></slot></span><span class="c=--gold">{"}"}</span>