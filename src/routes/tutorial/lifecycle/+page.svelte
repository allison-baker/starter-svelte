<script lang="ts">
	import { onMount, tick } from 'svelte';

	let pokeImg: string;
	let pokeName: string;

	onMount(async () => {
		let randomPokeID = Math.floor(Math.random() * 100) + 1;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeID}`);
		const pokemon = await response.json();
		pokeImg = pokemon.sprites?.other?.['official-artwork']?.front_default;
		pokeName = pokemon.name;
	});

	let text = 'Select some text and hit the tab key to toggle to uppercase.';

	async function handleKeydown(this: any, event: { key: string; preventDefault: () => void }) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<h1 class="m-2 text-2xl">Lifecycle</h1>
<div class="flex flex-col justify-center items-center">
	{#if pokeImg}
		<img src={pokeImg} alt={pokeName} class="h-96 w-96" />
		<p class="font-bold text-white text-lg bg-secondary-500 rounded-md w-96 text-center py-2">
			{pokeName.toUpperCase()}
		</p>
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<p class="m-2 text-sm font-bold">
	This section shows a new Pokemon every time the document loads (onMount).
</p>

<hr class="border-2" />

<textarea
	value={text}
	on:keydown={handleKeydown}
	class="w-full text-center m-2 p-2 bg-secondary-300 font-bold text-lg"
/>

<p class="m-2 text-sm font-bold">
	This textarea allows you to toggle the selection between upper and lower case by hitting the tab
	key.
</p>
