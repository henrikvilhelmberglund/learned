<script lang="ts">
	import { mount } from "svelte";
	import CopyButton from "$lib/components/CopyButton.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeInit from "$lib/theme/ThemeInit.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import "@unocss/reset/tailwind.css";

  const { children } = $props();

	// Copy buttons on pre
	$effect(() => {
		for (const node of document.querySelectorAll("pre > code")) {
			if (node.parentNode) {
				mount(CopyButton, {
					// use whatever Svelte component you like here
					target: node.parentNode as HTMLElement,
					anchor: node.parentNode,
					props: {
						content: node.textContent ?? "",
					},
				});
			}
		}
	});
</script>

<main
	class="from-primary-50 via-primary-200 scrollbar-fix to-primary-50 dark:from-primary-950/50 dark:via-primary-950/10 dark:to-primary-950/50 flex min-h-screen flex-col items-center bg-gradient-to-b via-70% dark:bg-black">
	<header>
		<ThemeInit />
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>
  {@render children()}
</main>

<style></style>
