<script lang="ts">
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}
    
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
    let selected = colors[0];

    import Thing from '$lib/components/Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}

    import { getRandomNumber } from '$lib/utils.js';

	let promise = getRandomNumber();

	function handlePromise() {
		promise = getRandomNumber();
	}
</script>

<h1 class="m-2 text-2xl">Logic</h1>

<button class="rounded-full m-2 bg-pink-600 px-4 py-2 my-4" on:click={increment}>
	Clicked {count}
	{count === 1 ? 'Time' : 'Times'}
</button>

{#if count >= 10}
	<p class="m-2">{count} is greater than or equal to 10</p>
{:else if count < 5}
	<p class="m-2">{count} is between 0 and 5</p>
{:else}
	<p class="m-2">{count} is between 5 and 10</p>
{/if}

<h1 style="color: {selected}" class=m-2>Pick a Color</h1>

<div class="m-2">
    {#each colors as color, i}
	<button
        class="colors"
		aria-current={selected === color}
		aria-label=color
		style="background: {color}"
		on:click={() => (selected = color)}
	>{i + 1}</button>
    {/each}
</div>

<button class="rounded-full bg-pink-600 px-4 py-2 my-4 mx-2" on:click={handleClick}>
	Remove First Thing
</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<button class="rounded-full bg-pink-600 px-4 py-2 my-4 mx-2" on:click={handlePromise}>
	Generate Random Number
</button>

{#await promise}
    <p class="m-2">...waiting</p>
{:then number}
    <p class="m-2">The number is {number}</p>
{:catch error}
    <p class="text-red-600 m-2">{error.message}</p>
{/await}

<style>
	h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button.colors {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px, -2px);
		filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
		transition: all 0.1s;
	}

	button.colors[aria-current='true'] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
	}
</style>

<a href="../../tutorial" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Tutorials</a>
<a href="../../" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Home</a>