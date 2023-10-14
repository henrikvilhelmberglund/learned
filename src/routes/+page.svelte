<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import { browser } from "$app/environment";
	import { color } from "$lib/stores";
	import MeltAccordion from "$lib/melt-examples/MeltAccordion.svelte";
	import Posts from "$lib/components/Posts.svx";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;

	export let data;

	// console.log(data.mds);
</script>



	<h1 class="text-primary-950 font-onest dark:text-primary-100 text-center text-4xl md:text-6xl font-thin md:p-8 md:pb-0">
		Today I learned...
	</h1>

	{#each Object.values(data.mds).reverse() as posts}
		<Posts {posts} />
		<!-- {post.default} -->
	{/each}


<Footer />

<style>
</style>
