<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-2xl">Al Baker</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/" class="text-xl">Home</a>
				<a href="/tutorial" class="text-xl">Tutorials</a>
				<a href="/auth/signup" class="text-xl">Sign Up Form</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
