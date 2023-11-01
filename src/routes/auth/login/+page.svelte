<script lang="ts">
	import { localUser } from '$lib/stores/localUser';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	const credentials = {
		email: '',
		password: ''
	};

	const modalStore = getModalStore();

	const handleSubmit = async () => {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Welcome back!',
			body: `Thanks for logging back in, ${$localUser.email}!`
		};
		modalStore.trigger(modal);
	};

	/* const handleSubmit = async () => {
		alert('Welcome back!');
		// contact auth api to authenticate the user
		console.log(credentials);
	}; */
</script>

<div class="h-full mx-auto flex justify-center items-center container">
	<div class="card text-center w-1/3 rounded-lg">
		<form
			class="form flex flex-col items-center space-y-10 py-8"
			on:submit|preventDefault={handleSubmit}
		>
			<h1 class="text-3xl font-bold text-primary-600 dark:text-primary-400">Welcome Back!</h1>
			<input
				required
				autocomplete="email"
				type="email"
				placeholder="Email"
				class="py-2 px-4 w-2/3 bg-tertiary-200 input"
				bind:value={credentials.email}
			/>
			<input
				required
				autocomplete="current-password"
				type="password"
				placeholder="Password"
				class="py-2 px-4 w-2/3 bg-tertiary-200 input"
				bind:value={credentials.password}
			/>
			<input type="submit" value="Log In" class="btn variant-filled-secondary" />
		</form>
		<p class="mb-8">
			New to my site? <a href="/auth/signup" class="text-tertiary-500 hover:text-tertiary-400"
				>Create an account instead.</a
			>
		</p>
	</div>
</div>
