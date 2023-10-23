<script lang="ts">
	import { tweened, spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ProgressBar } from '@skeletonlabs/skeleton';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	let size = spring(10);
</script>

<h1 class="m-2 text-2xl">Motion</h1>

<div class="w-3/4 m-2">
	<ProgressBar
		label="Progress Bar"
		value={$progress}
		max={100}
		class="my-2"
		meter="bg-success-500 dark:bg-success-400"
		track="bg-surface-200 dark:bg-surface-400"
		height="h-4"
	/>

	<button on:click={() => progress.set(0)} class="btn variant-filled-secondary my-2">
		0%
	</button>

	<button on:click={() => progress.set(25)} class="btn variant-filled-secondary my-2"> 25% </button>

	<button on:click={() => progress.set(50)} class="btn variant-filled-secondary my-2"> 50% </button>

	<button on:click={() => progress.set(75)} class="btn variant-filled-secondary my-2"> 75% </button>

	<button on:click={() => progress.set(100)} class="btn variant-filled-secondary my-2">
		100%
	</button>
</div>

<p class="m-2 text-sm font-bold">
	This section uses tweening to animate changes made to the DOM at the click of a button.
</p>

<hr class="border-2" />

<div class="flex m-2">
	<div class="w-[200px] select-none">
		<label>
			<h3>stiffness ({coords.stiffness})</h3>
			<input
				bind:value={coords.stiffness}
				type="range"
				min="0.01"
				max="1"
				step="0.01"
				class="w-full"
			/>
		</label>

		<label>
			<h3>damping ({coords.damping})</h3>
			<input
				bind:value={coords.damping}
				type="range"
				min="0.01"
				max="1"
				step="0.01"
				class="w-full"
			/>
		</label>
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<svg
		on:mousemove={(e) => {
			const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
			coords.set({
				x: e.clientX - left,
				y: e.clientY - top
			});
			//coords.set({ x: e.clientX, y: e.clientY });
		}}
		on:mousedown={() => size.set(30)}
		on:mouseup={() => size.set(10)}
		class="w-full h-128 border-2 border-tertiary-400 rounded-md ml-2"
	>
		<circle cx={$coords.x} cy={$coords.y} r={$size} fill="#663363" />
	</svg>
</div>

<p class="m-2 text-sm font-bold">
	This section uses spring to change the damping and stiffness of an SVG.
</p>
