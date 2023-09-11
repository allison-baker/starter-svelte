<script lang="ts">
	let name = 'Cat';
	let src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif';
</script>

<h1 class="text-2xl m-2 text-pink-500">Welcome to my page {name.toUpperCase()}!</h1>

<img {src} alt="animated {name}.gif" class="m-2 rounded" />

<p class='font-sans text-lime-500 font-bold m-2'>Here is my sample paragraph!</p>

<p class="m-2">Here is another paragraph.</p>

<a href="../../tutorial" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Tutorials</a>
<a href="../../" class="rounded-full block bg-green-600 w-40 text-center py-2 mx-2 my-4">Back to Home</a>
