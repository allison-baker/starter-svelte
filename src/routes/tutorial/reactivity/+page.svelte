<script lang="ts">
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
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

<div>
    <button on:click={increment}>
        Clicked {count}
        {count === 1 ? 'time' : 'times'}
    </button>
    
    <p>{count} doubled is {doubled}</p>    
</div>
<div>
    <p>{numbers.join(' + ')} = {sum}</p>
    <button on:click={addNumber}>Add a Number</button>
</div>
