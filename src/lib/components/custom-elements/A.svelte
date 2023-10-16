<script>
	export let href = "unknown link";
	export let rel = undefined;
</script>

<a {rel} class="text-1xl font-sans font-semibold text-primary-800 hover:text-primary-600 dark:text-primary-400 hover:dark:text-primary-300 underline" {href}>
	<slot />
</a>
