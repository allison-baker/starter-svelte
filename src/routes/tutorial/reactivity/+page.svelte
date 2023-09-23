<script lang="ts">
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}

    function reset() {
        count = 0;
    }

	$: {
		console.log(`the count is ${count}`);
		console.log("wow, you're counting a lot!");
	}

    $: if(count >= 20) {
        alert("quit it, you're counting too much.");
    }

    let numbers = [1, 2, 3, 4];

    function addNumber() {
        numbers[numbers.length] = numbers.length + 1;
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<h1 class="text-2xl m-2">Reactivity</h1>

<div class="m-2">
    <button class="rounded-full block bg-emerald-600 px-4 py-2 my-4" on:click={increment}>
        Clicked {count}
        {count === 1 ? 'time' : 'times'}
    </button>
    
    <p>{count} doubled is {doubled}</p>
    <button class="rounded-full block bg-emerald-600 px-4 py-2 my-4" on:click={reset}>
        Reset Count
    </button>
</div>

<p class="m-2 text-sm text-slate-400 font-bold">This section demonstrates reactive values.</p>

<hr class="border-2" />

<div class="m-2">
    <p>{numbers.join(' + ')} = {sum}</p>
    <button class="rounded-full block bg-emerald-600 px-4 py-2 my-4" on:click={addNumber}>Add a Number</button>
</div>

<p class="m-2 text-sm text-slate-400 font-bold">This section demonstrates grouping reactive statements together with a block.</p>
