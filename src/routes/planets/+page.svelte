<script lang="ts">
	import { onMount } from 'svelte';
	import { planetsStore } from '$lib/stores/planetsStore.ts';

	interface Planets {
		name: string;
		mass: string;
		radius: string;
		temperature: string;
		distance: string;
		period: string;
		image: string;
	}

	const api_key = '1JMQnEy0RPLJV4tBNDZCow==0istE6CwLcnJjg1s';

	onMount(async () => {
		const res = await fetch('https://api.api-ninjas.com/v1/planets?max_distance_light_year=11.98', {
			method: 'GET',
			headers: {
				'X-API-Key': api_key,
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
		const data = await res.json();

		planetsStore.set(data as Planets[]);
	});
</script>

<main class="bg-surface-100-800-token h-full border-t-2 border-primary-500">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
		<h1 class="m-4 text-2xl">View Planets Information</h1>
		{#if $planetsStore.length === 0}
			<p class="mx-4">Loading Planet Data...</p>
		{:else}
			<section class="grid grid-cols-5 gap-4 mx-4">
				{#each $planetsStore as { name }}
					<a href={`/planets/${name}`} class=" text-white text-center bg-primary-500 p-2 rounded-md shadow-md">{name}</a>
				{/each}
			</section>
		{/if}
	</div>
</main>
