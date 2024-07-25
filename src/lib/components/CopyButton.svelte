<script lang="ts">
	// slightly stolen from https://github.com/janosh/svelte-zoo/blob/fea79e01419e1eb0e11e0f167eed15c74a84ef9b/src/lib/CopyButton.svelte

	const { content }: { content: string } = $props();
	// console.log(content);
	let state = $state("default");

	const labels: Record<string, string> = {
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

<aside class="relative flex self-end h-0 w-0">
  
  <div class="flex absolute self-end justify-end right-0 -top-4">
    <button
		onclick={copy}
		class="from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 relative flex h-8 items-baseline rounded bg-gradient-to-b px-2 dark:text-white/80">
		<span
    class:i-carbon-copy={state === "default"}
    class:i-carbon-checkmark={state === "success"}
    class:i-carbon-x={state === "error"}></span>
		<p>{labels[state]}</p>
	</button>
</div>
</aside>
