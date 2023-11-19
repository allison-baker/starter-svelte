<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { typewriter } from '$lib/utils/transition';
	import { messages } from '$lib/utils/loading-messages';

	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	hljs.registerLanguage('xml', xml);
	storeHighlightJs.set(hljs);

	let visible = true;
	let visible2 = true;
	let visible3 = true;
	let visible4 = false;

	let status = 'waiting...';

	let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

	let j = -1;
	onMount(() => {
		const interval = setInterval(() => {
			j += 1;
			j %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1 class="m-4 text-2xl">Transitions & Animation</h1>

<div class="mx-4 my-2">
	<label>
		<input type="checkbox" bind:checked={visible} /> Fade Me
	</label>

	{#if visible}
		<img
			src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			transition:fade
			class="h-48 w-auto"
			alt="cat"
		/>
	{/if}
</div>

<p class="m-4 text-sm font-bold">
	This checkbox uses the Svelte fade transition to show and hide an image.
</p>

<CodeBlock
	language="xml"
	code={`<label>
	<input type="checkbox" bind:checked={visible} /> Fade Me
</label>

{#if visible}
	<img
		src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		transition:fade
		class="h-48 w-auto"
		alt="cat"
	/>
{/if}`}
	class="m-4 w-2/3"
/>

<hr class="border-2" />

<div class="mx-4 my-2">
	<label>
		<input type="checkbox" bind:checked={visible2} /> Fly Me
	</label>

	<p>Status: {status}</p>

	{#if visible2}
		<p
			transition:fly={{ y: 200, duration: 2000 }}
			on:introstart={() => (status = 'intro started')}
			on:outrostart={() => (status = 'outro started')}
			on:introend={() => (status = 'intro ended')}
			on:outroend={() => (status = 'outro ended')}
		>
			This paragraph flies!
		</p>
	{/if}
</div>

<p class="m-4 text-sm font-bold">
	This checkbox uses the Svelte fly transition to show and hide an paragraph tag, and transition
	events to know when the transition starts and ends.
</p>

<CodeBlock
	language="xml"
	code={`<label>
	<input type="checkbox" bind:checked={visible2} /> Fly Me
</label>

<p>Status: {status}</p>

{#if visible2}
	<p
		transition:fly={{ y: 200, duration: 2000 }}
		on:introstart={() => (status = 'intro started')}
		on:outrostart={() => (status = 'outro started')}
		on:introend={() => (status = 'intro ended')}
		on:outroend={() => (status = 'outro ended')}
		>
			This paragraph flies!
		</p>
{/if}`}
	class="m-4 w-2/3"
/>

<hr class="border-2" />

<div class="mx-4 my-2">
	<label>
		<input type="checkbox" bind:checked={visible3} /> Fade Me In, Fly Me Out
	</label>

	{#if visible3}
		<p in:fade out:fly={{ x: 200, duration: 2000 }}>I can do different transitions in and out!</p>
	{/if}
</div>

<p class="m-4 text-sm font-bold">
	The 'in' and 'out' directives can specify different transitions in or out.
</p>

<CodeBlock
	language="xml"
	code={`<label>
	<input type="checkbox" bind:checked={visible3} /> Fade Me In, Fly Me Out
</label>

{#if visible3}
	<p in:fade out:fly={{ x: 200, duration: 2000 }}>
		I can do different transitions in and out!
	</p>
{/if}`}
	class="m-4 w-2/3"
/>

<hr class="border-2" />

<div class="mx-4 my-2">
	<label>
		<input type="checkbox" bind:checked={visible4} />
		Typewriter Effect
	</label>

	{#if visible4}
		<p transition:typewriter={{ speed: 1 }}>The quick brown fox jumps over the lazy dog</p>
	{/if}
</div>

<p class="m-4 text-sm font-bold">
	This checkbox uses a custom JS transition to create a typewriter effect.
</p>

<CodeBlock
	language="xml"
	code={`<label>
	<input type="checkbox" bind:checked={visible4} />
	Typewriter Effect
</label>

{#if visible4}
	<p transition:typewriter={{ speed: 1 }}>The quick brown fox jumps over the lazy dog</p>
{/if}`}
	class="m-4 w-2/3"
/>

<hr class="border-2" />

<div class="mx-4 my-2">
	<label>
		<input type="checkbox" bind:checked={showItems} /> Show List
	</label>

	<label>
		<input type="range" bind:value={i} max="10" />
	</label>

	{#if showItems}
		{#each items.slice(0, i) as item}
			<div transition:slide|global class="border-t border-tertiary-300 py-2">
				{item}
			</div>
		{/each}
	{/if}
</div>

<p class="m-4 text-sm font-bold">
	This section uses the global transition to play the slide transition when the slider is moved OR
	when the checkbox is toggled.
</p>

<CodeBlock
	language="xml"
	code={`<label>
	<input type="checkbox" bind:checked={showItems} /> Show List
</label>

<label>
	<input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide|global class="border-t border-tertiary-300 py-2">
			{item}
		</div>
	{/each}
{/if}`}
	class="m-4 w-2/3"
/>

<hr class="border-2" />

<div class="mx-4 my-2">
	<h2 class="text-lg text-primary-500 dark:text-primary-200">loading...</h2>

	{#key j}
		<p in:typewriter={{ speed: 10 }}>
			{messages[j] || ''}
		</p>
	{/key}
</div>

<p class="m-4 text-sm font-bold">
	This section uses a key block to destroy and recreate content every time the message changes, as
	well as the custom typewriter transition to display the message.
</p>

<CodeBlock
	language="xml"
	code={`<h2 class="text-lg text-primary-500 dark:text-primary-200">loading...</h2>

{#key j}
	<p in:typewriter={{ speed: 10 }}>
		{messages[j] || ''}
	</p>
{/key}`}
	class="m-4 w-2/3"
/>
