<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	console.log($page.data.session?.user);
</script>

{#if $page.data.session?.user}
	<p class="m-4">Signed in as {$page.data.session.user.email}</p>
	<h1 class="text-xl font-bold m-4">Welcome {$page.data.session.user.name}!</h1>
	<img src={$page.data.session.user.image} alt="profile" class="rounded-md h-64 w-64 mx-4" />
	<button on:click={signOut} class="btn variant-filled-primary m-4">Sign out</button>
{:else}
	<p class="m-4">Not signed in.</p>
	<button on:click={() => signIn('github')} class="btn variant-filled-primary mx-4">Sign in</button>
{/if}