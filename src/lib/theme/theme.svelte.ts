import { ref, persisted } from "$lib/utils.svelte";

export const selectedTheme = persisted("theme", "blue");