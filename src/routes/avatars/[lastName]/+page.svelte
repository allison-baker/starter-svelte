<script lang="ts">
	export let data;
</script>

<main class="bg-surface-100-800-token h-full border-t-2 border-primary-500">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
		<h2 class="text-lg font-bold mx-4 mt-4">{data.lastName}</h2>
		<h2 class="mx-4">{data.title}</h2>
		<h2 class="mx-4">{data.phone}</h2>
		<h2 class="mx-4">{data.email}</h2>
	</div>
</main>
