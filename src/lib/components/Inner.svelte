<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

	function sayHello() {
		dispatch('message', {
			text: 'Insert funny message here. Or some pun or something. I\'m out of creative juice.'
		});
	}
</script>

<button class="rounded-full block bg-pink-600 w-40 text-center py-2 mx-2 my-4" on:click={sayHello}>
	Click for Message
</button>
