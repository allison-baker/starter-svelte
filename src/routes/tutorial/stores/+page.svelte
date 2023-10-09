<script lang="ts">
	import { count } from '$lib/stores/count.ts';
	import Incrementer from '$lib/components/Incrementer.svelte';
	import Decrementer from '$lib/components/Decrementer.svelte';
	import Resetter from '$lib/components/Resetter.svelte';
	import { time, elapsed } from '$lib/stores/time.ts';
	import { customCount } from '$lib/stores/customCount.ts';
	import { name, greeting } from '$lib/stores/greeting.ts';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1 class="text-2xl m-2">Stores</h1>

<div class="m-2">
	<p class="my-2">The count is {$count}</p>

	<Incrementer />
	<Decrementer />
	<Resetter />
</div>

<p class="m-2 text-sm font-bold">
	This section uses a writable store and different components to increment, decrement, and reset a
	count.
</p>

<hr class="border-2" />

<p class="m-2">The time is {formatter.format($time)}</p>
<p class="m-2">
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<p class="m-2 text-sm font-bold">
	This section uses a readable store to show the current time and a derived store that uses the time
	to show how long the page has been open.
</p>

<hr class="border-2" />

<div class="m-2">
	<p class="my-2">The custom count is {$customCount}.</p>

	<button on:click={customCount.increment} class="btn variant-filled-secondary">+</button>
	<button on:click={customCount.decrement} class="btn variant-filled-secondary">-</button>
	<button on:click={customCount.reset} class="btn variant-filled-secondary">Reset</button>
</div>

<p class="m-2 text-sm font-bold">
	This section uses a custom writable store with increment, decrement, and reset methods to avoid
	exposing set and update.
</p>

<hr class="border-2" />

<label class="m-2"
	>Your Name: <input
		type="text"
		bind:value={$name}
		class="text-surface-800 my-2 p-2 rounded-md bg-tertiary-200"
	/></label
>
<p class="mx-2">{$greeting}</p>
<button class="btn variant-filled-secondary m-2" on:click={() => ($name += '!')}
	>Add another exclamation mark!</button
>

<p class="m-2 text-sm font-bold">
	This section binds the value of an input field to a writable store, and allows the user to update
	the name directly inside the component using an onclick handler.
</p>
