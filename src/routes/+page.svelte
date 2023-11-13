<script lang="ts">
<<<<<<< HEAD
<<<<<<< Updated upstream
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
=======
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
>>>>>>> Stashed changes
=======
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
>>>>>>> 6cf35180cb79dfdc7d016795d6d4552779d45923

	let loggedIn = $page.data.session?.user;
</script>

<<<<<<< HEAD
<<<<<<< Updated upstream
<h1 class="text-2xl m-4">Welcome!</h1>

<p class="m-4">My name is Al Baker and I'm a Web and App Development student at Utah Valley University.</p>
=======
=======
>>>>>>> 6cf35180cb79dfdc7d016795d6d4552779d45923
<main class="bg-[url('/images/background.jpg')] bg-cover h-full">
	<div class="flex flex-col h-full justify-center items-center gap-4">
		<h1 class="text-6xl text-white font-bold">Welcome to my Svelte Site!</h1>
		{#if !loggedIn}
			<p>Please log in to continue:</p>
			<button class="btn variant-ghost-surface" on:click={() => signIn('github')}
				><span class="mr-2"><i class="fa fa-github" /></span>Log In with GitHub</button
			>
			<button class="btn variant-ghost-surface" on:click={() => signIn('google')}
				><span class="mr-2"><i class="fa fa-google" /></span>Log In with Google</button
			>
		{/if}
<<<<<<< HEAD
		{#if loggedIn}
			<p class="text-surface-900">Browse Basic Svelte Tutorials!</p>
			<button class="btn variant-ghost-surface" on:click={() => goto('/tutorial')}>Basic Tutorials</button>
			<p class="text-surface-900">Browse Advanced Svelte Tutorials!</p>
			<button class="btn variant-ghost-surface" on:click={() => goto('/advancedTutorial')}>Advanced Tutorials</button>
			<p class="text-surface-900">Try my todo list!</p>
			<button class="btn variant-ghost-surface" on:click={() => goto('/todo')}>Todo List</button>
		{/if}
	</div>
</main>
>>>>>>> Stashed changes
=======
	</div>
</main>
>>>>>>> 6cf35180cb79dfdc7d016795d6d4552779d45923
