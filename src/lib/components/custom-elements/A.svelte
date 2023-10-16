<script>
	export let href = "unknown link";
	export let rel = undefined;
</script>

<a {rel} class="text-1xl font-sans font-semibold text-primary-800 dark:text-primary-400 underline" {href}>
	<slot />
</a>
