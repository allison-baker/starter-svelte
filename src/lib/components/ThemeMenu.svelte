<script lang="ts">
	import { theme } from '$lib/stores/theme.ts';
</script>

<div class="flex">
	<p class="text-xl">Theme: </p>
	<select class="select" multiple bind:value={$theme}>
		<option value="wintry">Wintry</option>
		<option value="crimson">Crimson</option>
		<option value="seafoam">Seafoam</option>
		<option value="skeleton">Skeleton</option>
	</select>
</div>
