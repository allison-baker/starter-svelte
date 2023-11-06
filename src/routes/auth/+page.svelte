<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	let modalStore = getModalStore();

	console.log($page.data.session?.user);

	const handleSignOut = async () => {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Signing Out',
			body: 'Do you really want to leave? Come back again soon!',
			response: (r: boolean) => {
				if (r) {
					signOut();
					goto('/auth/login');
				}
			}
		};
		modalStore.trigger(modal);
	};
</script>

{#if $page.data.session?.user}
	<h1 class="text-xl font-bold m-4">Welcome {$page.data.session.user.name}!</h1>
	<p class="mx-4">Signed in as {$page.data.session.user.email}</p>
	<img src={$page.data.session.user.image} alt="profile" class="rounded-full h-64 w-64 m-4" />
	<button on:click={handleSignOut} class="btn variant-filled-primary m-4">Sign out</button>
{:else}
	<p class="m-4">Not signed in.</p>
	<button on:click={() => signIn('github')} class="btn variant-filled-primary mx-4">Sign in</button>
{/if}