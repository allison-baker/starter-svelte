<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	import ThemeMenu from '$lib/components/ThemeMenu.svelte';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	});

	initializeStores();
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-3xl">Al Baker</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ThemeMenu />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div
			id="sidebar-left"
			class="hidden lg:block bg-tertiary-200 dark:bg-tertiary-900 h-full w-32 pt-2"
		>
			<a
				href="/"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800"
				>Home</a
			>
			<a
				href="/tutorial"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800"
				>Tutorials</a
			>
			<a
				href="/auth/"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800"
				>Log In</a
			>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
