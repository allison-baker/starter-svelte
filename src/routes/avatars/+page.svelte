<script lang="ts">
    export let data;
</script>

<main class="bg-surface-100-800-token h-full border-t-2 border-primary-500">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
        <h1 class="m-4 text-2xl">Avatars</h1>
        <section>
            {#each data.body as { lastName, avatar }}
                <a href={`/avatars/${lastName}`}>
                    <img src={avatar} alt="avatar" class="rounded-full w-8 h-8" />
                    <h2>{lastName}</h2>
                </a>
            {/each}
        </section>
    </div>
</main>