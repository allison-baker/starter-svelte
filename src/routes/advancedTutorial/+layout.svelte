<script lang="ts">
	import '../../app.postcss';
	import { page } from '$app/stores';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
</script>

<div style="view-transition-name: topNavigation2;">
	<TabGroup
		border="border-b-2 border-primary-500-400-token"
		padding="p-4"
		rounded="rounded-none"
		hover="hover:variant-soft-primary"
		active="variant-soft-primary"
		justify="justify-center"
	>
		<TabAnchor href="/advancedTutorial/" selected={$page.url.pathname === '/advancedTutorial'}
			>Intro.</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/motion"
			selected={$page.url.pathname === '/advancedTutorial/motion'}>Motion</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/transitions"
			selected={$page.url.pathname === '/advancedTutorial/transitions'}>Transitions</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/actions"
			selected={$page.url.pathname === '/advancedTutorial/actions'}>Actions</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/advancedBinding"
			selected={$page.url.pathname === '/advancedTutorial/advancedBinding'}>Adv. Binding</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/classesStyles"
			selected={$page.url.pathname === '/advancedTutorial/classesStyles'}
			>Classes & Styles</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/componentComposition"
			selected={$page.url.pathname === '/advancedTutorial/componentComposition'}
			>Component Comp.</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/contextAPI"
			selected={$page.url.pathname === '/advancedTutorial/contextAPI'}>Context API</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/specialElements"
			selected={$page.url.pathname === '/advancedTutorial/specialElements'}>Special Elem.</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/moduleContext"
			selected={$page.url.pathname === '/advancedTutorial/moduleContext'}>Module Context</TabAnchor
		>
		<TabAnchor
			href="/advancedTutorial/miscellaneous"
			selected={$page.url.pathname === '/advancedTutorial/miscellaneous'}>Misc.</TabAnchor
		>
	</TabGroup>
</div>

<<<<<<< HEAD
<<<<<<< Updated upstream
<slot />
=======
<main class="bg-surface-100-800-token h-full">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
		<slot />
	</div>
</main>
>>>>>>> Stashed changes
=======
<body class="bg-surface-100-800-token">
	<main class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
		<slot />
	</main>
</body>
>>>>>>> 6cf35180cb79dfdc7d016795d6d4552779d45923
