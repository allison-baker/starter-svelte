<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log($page.data.session?.user);
        if (!$page.data.session?.user) {
            goto('/auth/login');
        }
    })
</script>

<h1 class="text-2xl m-4">Welcome!</h1>

<p class="m-4">My name is Al Baker and I'm a Web and App Development student at Utah Valley University.</p>