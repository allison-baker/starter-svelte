<script lang="ts">
	import Motion from '../advancedTutorial/motion/+page.svelte';

	let activeRoute = 'Motion';

	function reassignRoute(newRoute: string) {
		activeRoute = newRoute;
	}
</script>

<main>
	<header>
		<h1 class="m-2 mt-4 text-2xl">Advanced Svelte Tutorials</h1>
	</header>
	<nav>
		<button
			class="btn variant-filled-primary mx-2 my-4"
			on:click={() => reassignRoute('Motion')}>Motion</button
		>
	</nav>
	{#if activeRoute === 'Motion'}
		<Motion />
	{/if}
</main>
