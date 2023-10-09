<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { localUser } from '$lib/stores/localUser';
	import { goto } from '$app/navigation';

	const credentials = {
		firstName: '',
		lastName: '',
		email: ''
	};

	let password: string;

	const modalStore = getModalStore();

	const handleSubmit = async () => {
		$localUser = credentials;

		new Promise<boolean>((resolve) => {
			const modal: ModalSettings = {
				type: 'confirm',
				title: 'Thanks for signing up!',
				body: 'Log in to continue to the site.',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
		}).then((r: any) => {
			if (r) goto('../auth');
		});
	};
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
				bind:value={password}
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
