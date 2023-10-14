<script>
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import "@unocss/reset/tailwind.css";
</script>

<main
	class="from-primary-50 via-primary-300 to-primary-50 via-70% min-w-screen flex min-h-screen flex-col items-center bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 [&>*]:my-4">
	<header>
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>
	<slot />
</main>

<style></style>
