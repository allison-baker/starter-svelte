<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ProgressBar } from '@skeletonlabs/skeleton';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<h1 class="m-2 text-2xl">Motion</h1>

<ProgressBar
	label="Progress Bar"
	value={$progress}
	max={100}
	class="m-2 w-3/4"
	meter="bg-success-500 dark:bg-success-400"
	track="bg-surface-200 dark:bg-surface-400"
    height="h-4"
/>

<button on:click={() => progress.set(0)} class="btn variant-filled-secondary my-2 ml-2">
	0%
</button>

<button on:click={() => progress.set(25)} class="btn variant-filled-secondary my-2"> 25% </button>

<button on:click={() => progress.set(50)} class="btn variant-filled-secondary my-2"> 50% </button>

<button on:click={() => progress.set(75)} class="btn variant-filled-secondary my-2"> 75% </button>

<button on:click={() => progress.set(100)} class="btn variant-filled-secondary my-2"> 100% </button>

<p class="m-2 text-sm font-bold">
	This section uses tweening to animate changes made to the DOM at the click of a button.
</p>

<hr class="border-2" />
