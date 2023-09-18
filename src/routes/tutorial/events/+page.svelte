<script lang="ts">
	// import Inner from "$lib/components/Inner.svelte"
	import { getModalStore } from '@skeletonlabs/skeleton'
	import type { ModalSettings } from '@skeletonlabs/skeleton'
	import Outer from "$lib/components/Outer.svelte"
	import BigRedButton from '$lib/components/BigRedButton.svelte';
	
	let m = { x: 0, y: 0 };

	const modalStore = getModalStore()

    function handleMessage(event: {detail: {text: any}}) {
        const modal: ModalSettings = {
			type: 'alert',
			title: 'Hello!',
			body: event.detail.text
		}
		modalStore.trigger(modal)
		//alert(event.detail.text)
    }

	function handleClick() {
		alert('You clicked the big red button!')
	}
</script>

<div
	class="left-0 top-0 w-full h-96 p-4 bg-green-200"
	on:pointermove={(e) => {
		m = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) };
	}}
>
	<p class="text-slate-800 font-bold">The pointer is at {m.x} x {m.y}</p>
</div>

<button class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4"on:click={() => alert('clicked')}>
	Click Me
</button>

<Outer on:message={handleMessage}/>

<BigRedButton on:click={handleClick} />
