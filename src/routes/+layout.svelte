<script>
  import { mount } from 'svelte';
	import { afterNavigate } from "$app/navigation";
	import CopyButton from "$lib/components/CopyButton.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeInit from "$lib/theme/ThemeInit.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import "@unocss/reset/tailwind.css";

	// Copy buttons on pre
	afterNavigate(() => {
    console.log("ran afternavigate")
		for (const node of document.querySelectorAll("pre > code")) {
			mount(CopyButton, {
				// use whatever Svelte component you like here
				target: node.parentNode,
        anchor: node,
				props: {
					content: node.textContent ?? "",
				},
        
			});
		}
	});
</script>

<main
	class="from-primary-50 via-primary-200 scrollbar-fix to-primary-50 dark:from-primary-950/50 dark:via-primary-950/10 dark:to-primary-950/50 flex min-h-screen flex-col items-center bg-gradient-to-b via-70% dark:bg-black [&>*]:my-4">
	<header>
		<ThemeInit />
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>
	<slot />
</main>

<style></style>
