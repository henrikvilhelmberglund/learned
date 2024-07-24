<script lang="ts">
	import type { Snippet } from "svelte";

  const {_class, children}: {_class: string, children: Snippet} = $props();
</script>

<div
	class="font-onest text-primary-950 dark:text-primary-300 w-full self-start text-lg font-light {_class}">
  {@render children()}
</div>