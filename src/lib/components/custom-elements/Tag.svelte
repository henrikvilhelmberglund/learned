<script>
	export let href = undefined;
</script>

<a
	{href}
	class:py-2={href}
	class="font-onest dark:text-primary-500 text-primary-950 min-h-px pl-2 text-center text-xl font-extralight">
	<slot />
</a>
