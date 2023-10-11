<script lang="ts">
	import { theme } from '$lib/stores/theme.ts';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item',
	};
</script>


<button class="btn variant-filled-tertiary w-56 justify-between" use:popup={popupCombobox}>
	<span class="capitalize">{$theme ?? 'Theme'}</span>
	<span>↓</span>
</button>

<div class="card w-56 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={$theme} name="medium" value="my-custom-theme">Custom Theme</ListBoxItem>
		<ListBoxItem bind:group={$theme} name="medium" value="vintage">Vintage</ListBoxItem>
		<ListBoxItem bind:group={$theme} name="medium" value="hamlindigo">Hamlindigo</ListBoxItem>
		<ListBoxItem bind:group={$theme} name="medium" value="gold-nouveau">Gold Nouveau</ListBoxItem>
		<ListBoxItem bind:group={$theme} name="medium" value="rocket">Rocket</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>

<LightSwitch on:click/>
