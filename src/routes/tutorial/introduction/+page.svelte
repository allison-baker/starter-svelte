<script lang="ts">
	let name = 'Cat';
	let src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif';
	import Nested from '$lib/components/Nested.svelte'
</script>

<h1>Welcome to my page {name.toUpperCase()}!</h1>

<img {src} alt="animated {name}.gif" />

<p class='font-sans text-lime-700 font-bold'>Here is my sample paragraph!</p>

<p>Here is another paragraph.</p>
