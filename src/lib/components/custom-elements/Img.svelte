<script>
	export let src;
  export let alt;
</script>

<div class="flex flex-col items-center">
	<img {src} {alt} />
</div>
<slot />

<style>
</style>
