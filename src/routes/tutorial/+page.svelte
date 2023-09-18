<script lang="ts">
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'
	import Events from './events/+page.svelte'

	let activeRoute = Introduction
</script>

<main>
	<header>
		<h1>Svelte Tutorials</h1>
	</header>
	<nav>
		<button class="rounded-full bg-pink-600 w-40 text-center py-2 mx-2 my-4">Introduction</button>
		<button class="rounded-full bg-pink-600 w-40 text-center py-2 mx-2 my-4">Reactivity</button>
		<button class="rounded-full bg-pink-600 w-40 text-center py-2 mx-2 my-4">Props</button>
		<button class="rounded-full bg-pink-600 w-40 text-center py-2 mx-2 my-4">Logic</button>
		<button class="rounded-full bg-pink-600 w-40 text-center py-2 mx-2 my-4">Events</button>
	</nav>
</main>