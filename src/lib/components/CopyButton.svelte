<script>
	// slightly stolen from https://github.com/janosh/svelte-zoo/blob/fea79e01419e1eb0e11e0f167eed15c74a84ef9b/src/lib/CopyButton.svelte
	export let content;
	console.log(content);
	let state = "default";

	const labels = {
		default: `Copy`,
		success: `Copied!`,
		error: `Error`,
	};

	async function copy() {
		try {
			await navigator.clipboard.writeText(content);
			state = `success`;
		} catch (err) {
			console.error(err);
			state = `error`;
		}
		setTimeout(() => (state = `default`), 2000);
	}
</script>

<div class="flex justify-end">
	<button
		on:click={copy}
		class="from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 relative flex h-8 px-2 items-center rounded bg-gradient-to-b dark:text-white/80">
		<span
			class:i-carbon-copy={state === "default"}
			class:i-carbon-checkmark={state === "success"}
			class:i-carbon-x={state === "error"} />
		<p>{labels[state]}</p>
	</button>
</div>
