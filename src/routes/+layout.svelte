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

	import { browser } from '$app/environment';

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
				<img src={imageSrc} height="60" width="60" alt="personal logo" class="mr-4" />
				<strong class="text-3xl">Al Baker</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ThemeMenu on:click={() => isDarkMode = !isDarkMode}/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div
			id="sidebar-left"
			class="hidden lg:block bg-tertiary-200 dark:bg-tertiary-900 h-full w-32"
		>
			<a
				href="/"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>About Me</a
			>
			<a
				href="/tutorial"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>Basic</a
			>
			<a
				href="/advancedTutorial"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>Advanced</a
			>
			<a
				href="/auth/"
				class="text-xl block p-2 hover:font-bold hover:bg-tertiary-300 dark:hover:bg-tertiary-800 py-4"
				>Log In</a
			>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
