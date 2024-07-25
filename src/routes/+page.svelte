<script>
	import Footer from "$lib/Footer.svelte";
	import Posts from "$lib/components/Posts.svx";

	const { data } = $props();

	const todo = data.todo;
</script>

<h1
	class="text-primary-950 font-onest dark:text-primary-100 text-center text-4xl font-thin md:p-8 md:py-14 md:pb-0 md:text-6xl">
	Today I learned...
</h1>

<!-- <Todo {todo} /> -->

<div class="py-12"></div>

{#each Object.values(data.mds).reverse() as posts}
	<Posts {posts}></Posts>
{/each}

<Footer />

<style>
</style>
