<script lang="ts">
import Style from "src/styles"
</script>

<div class="bg=#33669966 {Style.background.grid} ta=center">
	<div class="bg=conic-gradient(from_45deg_at_67%_67%,--chambray80,--chambray20) @dark@bg=conic-gradient(from_-45deg_at_33%_67%,--firefly,--black-cc)">
		<div class="w=80% m=auto">
			<slot></slot>
		</div>
	</div>
</div>