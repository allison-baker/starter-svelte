<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { signIn } from '@auth/sveltekit/client';

	let loggedIn = $page.data.session?.user;
</script>

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
		{#if loggedIn}
			<p class="text-surface-900">Browse Basic Svelte Tutorials!</p>
			<button class="btn variant-ghost-surface" on:click={() => goto('/tutorial')}
				>Basic Tutorials</button
			>
			<p class="text-surface-900">Browse Advanced Svelte Tutorials!</p>
			<button class="btn variant-ghost-surface" on:click={() => goto('/advancedTutorial')}
				>Advanced Tutorials</button
			>
			<p class="text-surface-900">Try my todo list!</p>
			<button class="btn variant-ghost-surface" on:click={() => goto('/todo')}>Todo List</button>
		{/if}
	</div>
</main>
