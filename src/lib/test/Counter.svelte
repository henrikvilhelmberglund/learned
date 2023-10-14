<script>
	let count = 0;
</script>

{count}
<button on:click={() => (count += 1)} aria-label="Increase the counter by one">+</button>
<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">-</button>

<style>
</style>
