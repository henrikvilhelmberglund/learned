<script lang="ts">
	import Posts from "$lib/components/Posts.svx";

	export let data;
	const posts = data.mds;
</script>

<!-- TODO this seems a bit stupid, but right now Posts is expected to be an array -->
{#each Object.values(data.mds).reverse() as posts}
	<Posts {posts}>
		<a class="text-2xl font-extralight font-onest mt-4 underline decoration-px underline-blue-600" href="/">Go back to all posts</a>
	</Posts>
{/each}

<style>
</style>
