<script lang="ts">
	import { fade } from 'svelte/transition';
	let visible = true;
</script>

<h1 class="m-2 text-2xl">Transitions</h1>

<label>
    <input type="checkbox" bind:checked={visible} /> Visible
</label>

{#if visible}
    <p>
        Fades in and out
    </p>
{/if}
