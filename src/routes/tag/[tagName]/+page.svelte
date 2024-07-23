<script lang="ts">
	import Posts from "$lib/components/Posts.svx";

	export let data;
	const posts = data.mds;
	console.log(posts);
</script>

{#each Object.values(data.mds).reverse() as posts}
	<Posts {posts}>
		<a class="text-2xl font-extralight font-onest mt-4 underline decoration-px underline-blue-600" href="/">Go back to all posts</a>
	</Posts>
{/each}

<style>
</style>
