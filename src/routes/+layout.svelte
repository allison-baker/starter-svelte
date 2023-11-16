<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import ThemeMenu from '$lib/navigation/ThemeMenu.svelte';
	import SideNav from '$lib/navigation/SideNav.svelte';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
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

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Modal />

<Drawer width="w-56">
	<SideNav />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex flex-row items-center" style="view-transition-name: name;">
					<button class="btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<img src={imageSrc} height="60" width="60" alt="personal logo" class="mr-4" />
					<strong class="text-3xl">Al Baker</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ThemeMenu on:click={() => (isDarkMode = !isDarkMode)} />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<SideNav />
	</svelte:fragment>
	<slot />
</AppShell>
