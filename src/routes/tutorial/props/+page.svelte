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

<h1 class="m-2 text-2xl">Props</h1>

<Nested answer={'42'} />
<Nested />

<PackageInfo {...pkg} />
