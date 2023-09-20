<script lang="ts">
    let name = "world";

    let a = 1;
    let b = 2;

    let yes = false;
</script>

<h1 class="m-2 text-2xl">Bindings</h1>

<input class="text-black m-2" bind:value={name} />

<p class="m-2 text-lg">Hello {name}!</p>

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

<button class="rounded-full bg-green-600 w-40 text-center py-2 mx-2 my-4" disabled={!yes}>Subscribe</button>

<p class="m-2 text-sm text-slate-400 font-bold">This section demonstrates binding a checkbox input to a boolean value and using an if block to change the DOM.</p>

<hr class="border-2" />