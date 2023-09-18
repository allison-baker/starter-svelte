<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

	function sayHello() {
		dispatch('message', {
			text: 'You must have clicked the message button. Good job!'
		});
	}
</script>

<button class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4" on:click={sayHello}>
	Click for Message
</button>
