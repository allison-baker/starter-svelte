<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	import ThemeMenu from '$lib/components/ThemeMenu.svelte';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	import { onNavigate } from '$app/navigation';

	import { browser } from '$app/environment';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	storePopup.set({
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	});

	let lightSrc = '/images/personal_logo225.png';
	let darkSrc = '/images/personal_logo_transparent.png';
	let imageSrc: string;

	let isDarkMode: boolean;
	$: if (browser) {
		isDarkMode = document.documentElement.classList.contains('dark');
		if (isDarkMode) imageSrc = darkSrc;
		else imageSrc = lightSrc;
	}

	initializeStores();
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<img src={imageSrc} height="60" width="60" alt="personal logo" class="mr-4" style="view-transition-name: logo;"/>
				<strong class="text-3xl" style="view-transition-name: name;">Al Baker</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ThemeMenu on:click={() => (isDarkMode = !isDarkMode)} />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block bg-tertiary-200 dark:bg-tertiary-900 h-full w-32" style="view-transition-name: sideBar;">
			<!-- <a
				href="/"
				class="block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>About Me</a
			> -->
			<a
				href="/tutorial"
				class="block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>Basic</a
			>
			<a
				href="/advancedTutorial"
				class="block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>Advanced</a
			>
			<a
				href="/todo"
				class="block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>Todos</a
			>
			<a
				href="/auth"
				class="block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>User</a
			>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
