<script>
	// export let _class = "";
  const {_class, children} = $props();
</script>

<p
	class="font-onest text-primary-950 dark:text-primary-300 w-full self-start text-lg font-light {_class}">
  {@render children()}
</p>
