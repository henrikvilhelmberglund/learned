// import { ref } from "$lib/utils.svelte";
import { persisted } from "svelte-local-storage-store";

export const selectedTheme = persisted("theme", "blue");