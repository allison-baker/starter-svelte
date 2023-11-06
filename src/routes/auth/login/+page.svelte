<script lang="ts">
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		if ($page.data.session?.user) {
			goto('/');
		}
	});

	const handleSubmit = async () => {
		signIn('github');
	};
</script>

<div class="h-full mx-auto flex justify-center items-center container">
	<div class="card text-center w-1/3 rounded-lg">
		<form on:submit|preventDefault={handleSubmit}>
			<h1 class="mt-8 text-xl">Welcome! Log in with GitHub</h1>
			<button class="btn variant-filled-primary my-4" type="submit"
				><span class="mr-2"><i class="fa fa-github" /></span>Log In</button
			>
		</form>
		<p class="mb-8">
			New to my site? <a
				href="/auth/signup"
				class="text-tertiary-400 hover:text-tertiary-700-200-token"
				>Create an account instead.</a
			>
		</p>
	</div>
</div>
