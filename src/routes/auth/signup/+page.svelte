<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	const credentials = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	};

	const modalStore = getModalStore();

	const handleSubmit = async () => {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Welcome!',
			body: 'Thanks for signing up! We\'re happy to have you here.'
		};
		modalStore.trigger(modal);
	}

	/* const handleSubmit = async () => {
		alert('You\'ve signed up! Thanks!');
		console.log(credentials);
	}; */
</script>

<div class="h-full mx-auto flex justify-center items-center container">
	<div class="card text-center w-1/3 rounded-lg">
		<form class="form flex flex-col items-center space-y-10 py-8" on:submit={handleSubmit}>
			<h1 class="text-3xl font-bold text-primary-600 dark:text-primary-400">Sign Up</h1>
			<input
				required
				autocomplete="given-name"
				type="text"
				placeholder="First Name"
				class="py-2 px-4 w-2/3 bg-tertiary-200 input"
				bind:value={credentials.firstName}
			/>
			<input
				required
				autocomplete="family-name"
				type="text"
				placeholder="Last Name"
				class="py-2 px-4 w-2/3 bg-tertiary-200 input"
				bind:value={credentials.lastName}
			/>
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
				autocomplete="new-password"
				type="password"
				placeholder="Password"
				class="py-2 px-4 w-2/3 bg-tertiary-200 input"
				bind:value={credentials.password}
			/>
			<input
				required
				autocomplete="new-password"
				type="password"
				placeholder="Confirm Password"
				class="py-2 px-4 w-2/3 bg-tertiary-200 input"
			/>
			<input type="submit" value="Sign Up" class="btn variant-filled-secondary" />
		</form>
	</div>
</div>
