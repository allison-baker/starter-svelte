<script lang="ts">
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'
	import Events from './events/+page.svelte'
	import Bindings from './bindings/+page.svelte'

	let activeRoute = 'Introduction'

	function reassignRoute(newRoute: string) {
		activeRoute = newRoute
	}
</script>

<main>
	<header>
		<h1 class="m-2 mt-4 text-2xl">Svelte Tutorials</h1>
	</header>
	<nav>
		<button class="btn variant-filled-primary mx-2 my-4" on:click={() => reassignRoute('Introduction')}>Introduction</button>
		<button class="btn variant-filled-primary mx-2 my-4" on:click={() => reassignRoute('Reactivity')}>Reactivity</button>
		<button class="btn variant-filled-primary mx-2 my-4" on:click={() => reassignRoute('Props')}>Props</button>
		<button class="btn variant-filled-primary mx-2 my-4" on:click={() => reassignRoute('Logic')}>Logic</button>
		<button class="btn variant-filled-primary mx-2 my-4" on:click={() => reassignRoute('Events')}>Events</button>
		<button class="btn variant-filled-primary mx-2 my-4" on:click={() => reassignRoute('Bindings')}>Bindings</button>
	</nav>
	{#if activeRoute==='Introduction'}
		<Introduction />
	{/if}
	{#if activeRoute==='Reactivity'}
		<Reactivity />
	{/if}
	{#if activeRoute==='Props'}
		<Props />
	{/if}
	{#if activeRoute==='Logic'}
		<Logic />
	{/if}
	{#if activeRoute==='Events'}
		<Events />
	{/if}
	{#if activeRoute==='Bindings'}
		<Bindings />
	{/if}
</main>