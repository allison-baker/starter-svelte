<script lang="ts">
    let name = "world";

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

    let selected: { id: any; text: any; };

	let answer = '';

	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
</script>

<h1 class="m-2 text-2xl">Bindings</h1>

<input class="text-black m-2" bind:value={name} />

<p class="m-2">Hello {name}!</p>

<p class="m-2 text-sm text-slate-400 font-bold">This section demonstrates binding an input value to a variable.</p>

<hr class="border-2" />

<label class="block m-2">
	<input class="text-black my-2" type="number" bind:value={a} min="0" max="10" />
	<input class="text-black my-2" type="range" bind:value={a} min="0" max="10" />
</label>

<label class="block m-2">
	<input class="text-black my-2" type="number" bind:value={b} min="0" max="10" />
	<input class="text-black my-2" type="range" bind:value={b} min="0" max="10" />
</label>

<p class="m-2">{a} + {b} = {a + b}</p>

<p class="m-2 text-sm text-slate-400 font-bold">This section demonstrates binding input types number and range to variables.</p>

<hr class="border-2" />

<label class="m-2">
	<input class="my-2" type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p class="m-2">
		Thank you. We will bombard your inbox and sell
		your personal details.
	</p>
{:else}
	<p class="m-2">
		You must opt in to continue. If you're not
		paying, you're the product.
	</p>
{/if}

<button class="rounded-full bg-emerald-600 w-40 text-center py-2 mx-2 my-4" disabled={!yes}>Subscribe</button>

<p class="m-2 text-sm text-slate-400 font-bold">This section demonstrates bind:checked instead of bind:value to toggle states.</p>

<hr class="border-2" />

<h2 class="text-lg m-2">Insecurity Questions</h2>

<form class="m-2" on:submit|preventDefault={handleSubmit}>
	<select
		bind:value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option class="text-black" value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit">
		Submit
	</button>
</form>

<p class="m-2">
	You've selected question {selected
		? selected.id
		: '[waiting...]'}
</p>
