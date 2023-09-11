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

<a href="../../tutorial" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Tutorials</a>
<a href="../../" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Home</a>
