<script lang="ts">
	import { themeColors } from "./theme";
	import { selectedTheme } from "./theme.svelte";

  // TODO check localstorage for saved value

	$effect(() => {
		if (selectedTheme) {
			themeColors.forEach((theme) => {
				document.documentElement.classList.remove(theme);
			});
			document.documentElement.classList.add(selectedTheme.value);
		}
	});
</script>

<!-- <div class="flex flex-col md:flex-row absolute md:relative top-0 md:top-0 left-0 md:left-0"> -->
	{#each themeColors as themeColor}
		<button
			onclick={() => (selectedTheme.value = themeColor)}
			class="mx-2 h-10 w-10 rounded p-2 text-transparent bg-{themeColor}-500"></button>
	{/each}
<!-- </div> -->

<style>
</style>
