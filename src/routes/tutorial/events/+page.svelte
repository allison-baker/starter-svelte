<script lang="ts">
	import Inner from "$lib/components/Inner.svelte"
	import { getModalStore } from '@skeletonlabs/skeleton'
	
	let m = { x: 0, y: 0 };

	/* function handleMove(event: { clientX: number; clientY: number }) {
		m.x = event.clientX;
		m.y = event.clientY;
	} */

    function handleMessage(event: { detail: { text: any; }; }) {
        alert(event.detail.text)
    }

	const modalStore = getModalStore()
</script>

<div
	class="left-0 top-0 w-full h-96 p-4 bg-green-200"
	on:pointermove={(e) => {
		m = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) };
	}}
>
	<p class="text-slate-800 font-bold">The pointer is at {m.x} x {m.y}</p>
</div>

<button class="rounded-full block bg-pink-600 w-40 text-center py-2 mx-2 my-4"on:click={() => alert('clicked')}>
	Click Me
</button>

<Inner on:message={handleMessage}/>

<a href="../../tutorial" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Tutorials</a>
<a href="../../" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Home</a>
