<script lang="ts">
	const credentials = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const handleSubmit = async () => {
        alert("Thanks for submitting!")
        console.log(credentials)
    }
</script>

<div class="h-full mx-auto flex justify-center items-center container">
	<div class="card text-center w-1/3 rounded-lg">
		<form class="form flex flex-col items-center space-y-10 py-8" on:submit={handleSubmit}>
			<h1 class="text-3xl font-bold text-primary-600 dark:text-primary-400">Sign Up</h1>
			<input
				required
				autocomplete="given-name"
				type="text"
				placeholder="First Name"
				class="p-2 w-1/2 rounded-md text-surface-800 bg-tertiary-200"
                bind:value={credentials.firstName}
			/>
			<input
				required
				autocomplete="family-name"
				type="text"
				placeholder="Last Name"
				class="p-2 w-1/2 rounded-md text-surface-800 bg-tertiary-200"
                bind:value={credentials.lastName}
			/>
			<input
				required
				autocomplete="email"
				type="email"
				placeholder="Email"
				class="p-2 w-1/2 rounded-md text-surface-800 bg-tertiary-200"
                bind:value={credentials.email}
			/>
			<input
				required
				autocomplete="new-password"
				type="password"
				placeholder="Password"
				class="p-2 w-1/2 rounded-md text-surface-800 bg-tertiary-200"
                bind:value={credentials.password}
			/>
			<input
				required
				autocomplete="new-password"
				type="password"
				placeholder="Confirm Password"
				class="p-2 w-1/2 rounded-md text-surface-800 bg-tertiary-200"
			/>
			<input
				type="submit"
				value="Sign Up"
				class="btn variant-filled-secondary"
			/>
		</form>
	</div>
</div>
