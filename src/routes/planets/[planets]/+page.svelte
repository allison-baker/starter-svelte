<script lang="ts">
	import { goto } from '$app/navigation'; 
	export let data;
</script>

<main class="bg-surface-100-800-token h-full border-t-2 border-primary-500">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full justify-center items-center flex flex-col">
		<section class="flex flex-col justify-center items-center bg-surface-200-700-token rounded-lg p-8">
			<h2 class="m-4 text-3xl font-bold text-secondary-700-200-token">{data.planet.name}</h2>
			<p class="text-lg mb-2">Mass: {data.planet.mass}</p>
			<p class="text-lg mb-2">Radius: {data.planet.radius}</p>
			<p class="text-lg mb-2">Temperature: {data.planet.temperature}</p>
			<p class="text-lg mb-2">Distance from Earth (in light years): {data.planet.distance}</p>
			<button class="btn variant-ghost-tertiary m-4" on:click={() => goto("/planets")}>Back to View All</button>
		</section>
	</div>
</main>
