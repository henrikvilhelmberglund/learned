<script>
  export let href = undefined;
</script>


<a {href} 
class:py-2={href}
class="font-onest  dark:text-primary-500 text-xl font-extralight text-center text-primary-950 min-h-px  pl-2">
	<slot />
</a>
