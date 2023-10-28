<script>
	export let todo;
</script>

<aside
	class="bg-primary-200 dark:bg-primary-900 dark:text-primary-300 font-onest absolute right-0 top-0 hidden w-96 rounded-3xl p-4 font-extralight md:block">
	Current todos:
	<ul class="">
		{#each todo.split("\n") as line}
			<li>
				{#each line.split(/(✔|☐|✘)/) as result}
					<span 
          class:text-green-600={result === "✔"}
          class:text-primary-600={result === "☐"}
          class:dark:text-primary-300={result === "☐"}
          class:text-red-600={result === "✘"}
          >{result}</span>
					<!-- <span>{result[1]}</span> -->
				{/each}
			</li>
		{/each}
	</ul>
</aside>

<style>
</style>
