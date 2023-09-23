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
		alert('You clicked the big blue button!')
	}
</script>

<h1 class="m-2 text-2xl">Events</h1>

<div
	class="left-0 top-0 w-full h-96 p-4 bg-emerald-200"
	on:pointermove={(e) => {
		m = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) };
	}}
>
	<p class="text-slate-800 font-bold">The pointer is at {m.x} x {m.y}</p>
</div>
<p class="m-2 text-sm text-slate-400 font-bold">This div uses the on:pointermove event handler to show your current pointer location within the div.</p>

<hr class="border-2" />

<button class="rounded-full block bg-emerald-600 w-40 text-center py-2 mx-2 my-4"on:click={() => alert('clicked')}>
	Click Me
</button>
<p class="m-2 text-sm text-slate-400 font-bold">This button demonstrates a simple on:click event handler.</p>

<hr class="border-2" />

<Outer on:message={handleMessage}/>
<p class="m-2 text-sm text-slate-400 font-bold">This button demonstrates event forwarding from an Inner component to an Outer component to this page.</p>

<hr class="border-2" />

<BigRedButton on:click={handleClick} />
<p class="m-2 text-sm text-slate-400 font-bold">This button forwards an on:click event from another component.</p>
