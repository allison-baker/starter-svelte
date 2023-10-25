<script lang="ts">
	let name = 'Advanced Svelte Tutorials';
	let gifName = 'cat';
	let src = 'https://media.giphy.com/media/xUA7b68hKy839wiVJC/giphy.gif';
</script>

<h1 class="text-2xl m-4 text-secondary-600 dark:text-secondary-300 font-bold">
	Welcome to my {name.toUpperCase()} Introduction page!
</h1>

<img {src} alt="animated {gifName}.gif" class="m-4 rounded" />

<p class="mx-4 my-2">We're going to take some deep dives into some real funky, real fresh aspects of Svelte. Buckle up!</p>

<p class="text-sm font-bold m-4">
	Don't worry, I'm still using these lines throughout the application to let you know what's going on!
</p>

