<script lang="ts">
	import Nested from '$lib/components/Nested.svelte';
	import PackageInfo from '$lib/components/PackageInfo.svelte';

	let pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev/'
	};
</script>

<h1 class="mx-4 my-2 text-2xl">Props</h1>

<Nested answer={'42'} />

<p class="m-4 text-sm font-bold">
	This demonstrates passing data from a parent component to a child.
</p>

<hr class="border-2" />

<Nested />

<p class="m-4 text-sm font-bold">This demonstrates default values for props.</p>

<hr class="border-2" />

<PackageInfo {...pkg} />

<p class="m-4 text-sm font-bold">
	This demonstrates spreading an array with values that matches a component's props onto a
	component.
</p>
