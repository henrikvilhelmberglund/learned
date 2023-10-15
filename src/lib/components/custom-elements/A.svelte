<script>
	export let href = "unknown link";
	export let rel = undefined;
</script>

<a {rel} class="text-1xl font-sans font-medium text-pink-700 underline" {href}>
	<slot />
</a>
