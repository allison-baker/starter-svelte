<script lang="ts">
	let name = 'Svelte Tutorials';
	let gifName = 'cat'
	let src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif';
</script>

<h1 class="text-2xl m-2 text-secondary-600 dark:text-secondary-300 font-bold">Welcome to my {name.toUpperCase()} Introduction page!</h1>

<img {src} alt="animated {gifName}.gif" class="m-2 rounded" />

<p class="m-2">Here is a sample paragraph.</p>

<p class='text-sm font-bold m-2'>Look out for these lines throughout the application! They will tell you what each tutorial is demonstrating.</p>
