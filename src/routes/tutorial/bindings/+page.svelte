<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	let name = 'Thor';

	let a = 1;
	let b = 2;

	let yes = false;

	let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

	let selected: { id: any; text: any };

	let answer = '';

	const modalStore = getModalStore();

	function handleSubscribe() {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Thanks for opting in!',
			body: 'We\'re totally not about to sell all of your personal information.'
		};
		modalStore.trigger(modal);
	}

	function handleSubmit() {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Thanks for giving up your information!',
			body: `You've answered question ${selected.id} (${selected.text}) with "${answer}."`
		};
		modalStore.trigger(modal);
	}

	/* function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	} */
</script>

<h1 class="m-2 text-2xl">Bindings</h1>

<input class="m-2 text-surface-800 p-2 rounded-md bg-tertiary-200" bind:value={name} />

<p class="m-2">Hello {name}!</p>

<p class="m-2 text-sm font-bold">This section demonstrates binding an input value to a variable.</p>

<hr class="border-2" />

<label class="block m-2">
	<input
		class="text-surface-800 my-2 p-2 rounded-md bg-tertiary-200"
		type="number"
		bind:value={a}
		min="0"
		max="10"
	/>
	<input class="text-surface-800 my-2" type="range" bind:value={a} min="0" max="10" />
</label>

<label class="block m-2">
	<input
		class="text-surface-800 my-2 p-2 rounded-md bg-tertiary-200"
		type="number"
		bind:value={b}
		min="0"
		max="10"
	/>
	<input class="text-surface-800 my-2" type="range" bind:value={b} min="0" max="10" />
</label>

<p class="m-2">{a} + {b} = {a + b}</p>

<p class="m-2 text-sm font-bold">
	This section demonstrates binding input types number and range to variables.
</p>

<hr class="border-2" />

<label class="m-2">
	<input class="my-2" type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p class="m-2">Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
	<p class="m-2">You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button class="btn variant-filled-secondary mx-2 my-4" disabled={!yes} on:click={handleSubscribe}>Subscribe</button>

<p class="m-2 text-sm font-bold">This section demonstrates using bind:checked to toggle states.</p>

<hr class="border-2" />

<h2 class="text-lg m-2 text-primary-600 dark:text-primary-400 font-bold">Insecurity Questions</h2>

<form class="mx-2" on:submit|preventDefault={handleSubmit}>
	<select
		class="text-surface-800 p-2 rounded-md bg-tertiary-200"
		bind:value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option class="text-surface-800" value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input class="text-surface-800 p-2 rounded-md bg-tertiary-200" bind:value={answer} />

	<button class="btn variant-filled-secondary mx-2 my-4" disabled={!answer} type="submit">
		Submit
	</button>
</form>

<p class="m-2">
	You've selected question {selected ? selected.id : '[waiting...]'}
</p>

<p class="m-2 text-sm font-bold">This form uses bind:value with a select element.</p>

<hr class="border-2" />
