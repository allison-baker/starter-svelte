<script lang="ts">
	import Thing from '$lib/components/Thing.svelte';
	import { getRandomNumber } from '$lib/utils/delayFunction.ts';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { faker } from '@faker-js/faker'

	let count = 0;

	function increment() {
		count += 1;
	}
    
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
    let selected = colors[0];

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

	let promise = getRandomNumber();

	function handlePromise() {
		promise = getRandomNumber();
	}

	const twentyFiveAvatars = [...Array(25)].map(() => {
		const lastName = faker.person.lastName();
		return {
			lastName,
			avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${faker.person.firstName()}`,
		}
	})
</script>

<h1 class="m-2 text-2xl">Logic</h1>

<button class="rounded-full block m-2 bg-emerald-600 px-4 py-2 my-4" on:click={increment}>
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

<p class="m-2 text-sm text-slate-400 font-bold">This button uses if and else if statements to show where count is between 0, 5, and 10.</p>

<hr class="border-2" />

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

<p class="m-2 text-sm text-slate-400 font-bold">This section uses and each block to go through an array of colors.</p>

<hr class="border-2" />

<button class="rounded-full block bg-emerald-600 px-4 py-2 my-4 mx-2" on:click={handleClick}>
	Remove First Thing
</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<p class="m-2 text-sm text-slate-400 font-bold">This section uses an each block to display an array of things with a key so they can be removed.</p>

<hr class="border-2" />

<button class="rounded-full block bg-emerald-600 px-4 py-2 my-4 mx-2" on:click={handlePromise}>
	Generate Random Number
</button>

{#await promise}
	<div class="m-2"><ProgressRadial value={undefined} /></div>
{:then number}
    <p class="m-2">The number is {number}</p>
{:catch error}
    <p class="text-red-600 m-2">{error.message}</p>
{/await}

<p class="m-2 text-sm text-slate-400 font-bold">This section uses an await block to handle a promise.</p>

<hr class="border-2" />

<div class="flex flex-wrap bg-emerald-200 m-2">
	{#each twentyFiveAvatars as { lastName, avatar }}
	<div class="flex items-center">
		<img src={avatar} alt={lastName} class="w-24 h-24 rounded-full" />
		<p class="text-slate-800 font-bold">{lastName}</p>
	</div>
	{/each}
</div>

<p class="m-2 text-sm text-slate-400 font-bold">This section uses an each block to iterate through an array of objects and display them.</p>

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
