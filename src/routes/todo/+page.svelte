<script lang="ts">
	import { createTodoStore } from './todos.ts';
	import TodoList from './TodoList.svelte';

	const todos = createTodoStore([
		{ done: false, description: 'write some docs' },
		{ done: false, description: 'start writing blog post' },
		{ done: true, description: 'buy some milk' },
		{ done: false, description: 'mow the lawn' },
		{ done: false, description: 'feed the turtle' },
		{ done: false, description: 'fix some bugs' }
	]);
</script>

<main class="bg-surface-100-800-token h-full border-t-2 border-primary-500">
	<div class="max-w-[1200px] mx-auto bg-surface-50-900-token p-4 h-full">
		<p class="m-4 text-sm font-bold">
			This todo list demonstrates in and out transitions for todo items, as well as a flip animation
			on elements that aren't transitioning. change page
		</p>

		<div class="grid grid-cols-2 gap-4 max-w-xl my-0 mx-auto">
			<input
				class="text-xl p-2 my-4 col-start-1 col-end-3 rounded-md variant-ghost-tertiary"
				placeholder="what needs to be done?"
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						todos.add(e.currentTarget.value);
						e.currentTarget.value = '';
					}
				}}
			/>

			<div class="block">
				<h2 class="text-3xl font-light mb-4">todo</h2>
				<TodoList store={todos} done={false} />
			</div>

			<div class="block">
				<h2 class="text-3xl font-light mb-4">done</h2>
				<TodoList store={todos} done={true} />
			</div>
		</div>
	</div>
</main>
