<script>
	import { themeColors } from "./theme";
	import { selectedTheme } from "./theme.svelte";

  // TODO check localstorage for saved value

	$effect(() => {
		if (selectedTheme.value) {
			themeColors.forEach((theme) => {
				document.documentElement.classList.remove(theme);
			});
			document.documentElement.classList.add(selectedTheme.value);
		}
	});
</script>

<style>
</style>
