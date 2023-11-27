<script lang="ts">
    export let data;
</script>

<main class="bg-surface-100-800-token h-full border-t-2 border-primary-500">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
        <h1 class="m-4 text-2xl">Avatars</h1>
        <section class="flex flex-row flex-wrap gap-4 mx-4">
            {#each data.body as { lastName, avatar }}
                <a href={`/avatars/${lastName}`} class="bg-primary-500 p-2 rounded-full flex flex-row items-center gap-1 shadow-md">
                    <img src={avatar} alt="avatar" class="rounded-full w-8 h-8" />
                    <h2 class="text-white">{lastName}</h2>
                </a>
            {/each}
        </section>
    </div>
</main>