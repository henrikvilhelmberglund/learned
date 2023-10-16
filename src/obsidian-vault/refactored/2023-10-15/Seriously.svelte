<script>
	let count = 0;
</script>

<div>
	<button
		on:click={() => (count += 1)}
		class="text-primary-50 bg-primary-500 absolute -top-2 right-0 rounded-md p-2 px-6"
		>{count}</button
	><slot />
</div>

<style>
	div {
		background: pink;
		border: 23px solid orange;
		padding: 0 15px;
		width: 400px;
		text-align: center;
		transform: translateX(-200px);
		animation: 2s slide infinite alternate ease-in-out;
	}

	@keyframes slide {
		from {
			transform: translateX(-200px);
		}
		to {
			transform: translateX(200px);
		}
	}
</style>
