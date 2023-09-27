<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}

	function reset() {
		count = 0;
	}

	$: {
		console.log(`the count is ${count}`);
		console.log("wow, you're counting a lot!");
	}

	const modalStore = getModalStore();

	function countAlert() {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Stop it!',
			body: "Cut it out, you've counted enough now."
		};
		modalStore.trigger(modal);
	}

	$: if (count >= 20) {
		countAlert();
	}

	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<h1 class="text-2xl m-2">Reactivity</h1>

<div class="m-2">
	<button class="btn variant-filled-secondary my-4" on:click={increment}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>

	<p>{count} doubled is {doubled}</p>
	<button class="btn variant-filled-secondary my-4" on:click={reset}> Reset Count </button>
</div>

<p class="m-2 text-sm font-bold">This section demonstrates reactive values.</p>

<hr class="border-2" />

<div class="m-2">
	<p>{numbers.join(' + ')} = {sum}</p>
	<button class="btn variant-filled-secondary my-4" on:click={addNumber}>Add a Number</button>
</div>

<p class="m-2 text-sm font-bold">
	This section demonstrates grouping reactive statements together with a block.
</p>
