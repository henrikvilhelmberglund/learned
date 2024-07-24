<script lang="ts">
  const {src, alt}: {src: string, alt: string} = $props();
</script>

<img class="flex flex-col items-center" {src} {alt} />
<!-- {@render children()} -->

<style>
</style>

