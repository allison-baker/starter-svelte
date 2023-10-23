<script lang="ts">
	import Motion from '../advancedTutorial/motion/+page.svelte';
	import Transitions from '../advancedTutorial/transitions/+page.svelte';
	import Animations from '../advancedTutorial/animations/+page.svelte';
	import Actions from '../advancedTutorial/actions/+page.svelte';

	let activeRoute = 'Motion';

	function reassignRoute(newRoute: string) {
		activeRoute = newRoute;
	}
</script>

<main>
	<header>
		<h1 class="m-2 mt-4 text-2xl">Advanced Svelte Tutorials</h1>
	</header>
	<nav class="mx-2 my-4">
		<button
			class="btn variant-filled-primary"
			on:click={() => reassignRoute('Motion')}>Motion</button
		>
		<button
			class="btn variant-filled-primary"
			on:click={() => reassignRoute('Transitions')}>Transitions</button
		>
		<button
			class="btn variant-filled-primary"
			on:click={() => reassignRoute('Animations')}>Animations</button
		>
		<button
			class="btn variant-filled-primary"
			on:click={() => reassignRoute('Actions')}>Actions</button
		>
	</nav>
	{#if activeRoute === 'Motion'}
		<Motion />
	{/if}
	{#if activeRoute === 'Transitions'}
		<Transitions />
	{/if}
	{#if activeRoute === 'Animations'}
		<Animations />
	{/if}
	{#if activeRoute === 'Actions'}
		<Actions />
	{/if}
</main>
