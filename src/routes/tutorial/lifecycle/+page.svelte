<script lang="ts">
	import { onMount } from 'svelte';

	let pokeImg: string;
	let pokeName: string;

	onMount(async () => {
		let randomPokeID = Math.floor(Math.random() * 100) + 1;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeID}`);
		const pokemon = await response.json();
		pokeImg = pokemon.sprites?.other?.['official-artwork']?.front_default;
		pokeName = pokemon.name;
	});
</script>

<h1 class="m-2 text-2xl">Lifecycle</h1>
<div class="flex flex-col justify-center items-center">
	{#if pokeImg}
		<img src={pokeImg} alt={pokeName} class="h-96 w-96" />
        <p class="font-bold text-white text-lg bg-secondary-500 rounded-md w-96 text-center py-2">{pokeName.toUpperCase()}</p>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
