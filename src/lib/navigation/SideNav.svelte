<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4" style="view-transition-name: navigation">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/tutorial" on:click={drawerClose}>Basic</a></li>
		<li><a href="/advancedTutorial" on:click={drawerClose}>Advanced</a></li>
		<li><a href="/todo" on:click={drawerClose}>Todo</a></li>
		<li><a href="/planets" on:click={drawerClose}>Planets</a></li>
		<li><a href="/user" on:click={drawerClose}>Account</a></li>
	</ul>
</nav>
