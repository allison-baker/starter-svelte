<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

{#if $page.data.session?.user}
	<p class="m-4">Signed in as {$page.data.session.user.email}</p>
	<button on:click={signOut} class="btn variant-filled-primary mx-4">Sign out</button>
{:else}
	<p class="m-4">Not signed in.</p>
	<button on:click={() => signIn('github')} class="btn variant-filled-primary mx-4">Sign in</button>
{/if}