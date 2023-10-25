<script lang="ts">
	let name = 'Svelte Tutorials';
	let gifName = 'cat';
	let src = 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif';
</script>

<h1 class="text-2xl mx-4 my-2 text-secondary-600 dark:text-secondary-300 font-bold">
	Welcome to my {name.toUpperCase()} Introduction page!
</h1>

<img {src} alt="animated {gifName}.gif" class="mx-4 my-2 rounded" />

<p class="mx-4 my-2">I put this cat gif in here by assigning some attributes in the image tag to variables in my script tag!</p>

<p class="text-sm font-bold mx-4 my-2">
	Look out for these lines throughout the application! They will tell you what each tutorial is
	demonstrating.
</p>
