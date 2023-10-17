<script>
	export let todo;
</script>

<aside class="absolute right-0 top-0 w-96 bg-primary-200 rounded-3xl p-4 font-onest font-extralight md:block hidden">
	Current todos:
	<ul class="">
		{#each todo.split("\n") as line}
			<li>{line}</li>
		{/each}
	</ul>
</aside>

<style>
</style>
