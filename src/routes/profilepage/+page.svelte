<script lang="ts">
	import ChangesBox from './changesBox.svelte';
	const name: string = 'Hello, Lefteris';
	const email: string = 'example@example.com';

    let showNotification: string = "false";

    function handleClick() {
        showNotification = "true";
    }
</script>

<h1 class="text-4xl font-extrabold dark:text-white mt-4 ml-4">{name}</h1>
<div class="flex items-center mt-2 ml-4">
	<svg
		class="w-6 h-6 mr-2 text-textwhite"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
		/>
	</svg>
    <span class="text-lg text-textwhite font-semibold">{email}</span>
</div>

<div class="mt-8 mx-8">
    <span class="text-lg mx-4 text-textwhite font-semibold">{showNotification}</span>
<div class="w-auto mt-1 bg-black rounded-lg shadow-md p-8">
	<h1>Hello World</h1>
    <span class="cursor-pointer" on:click={handleClick}>Clickable Text 1</span>
      <span class="ml-4 cursor-pointer" on:click={handleClick}>Clickable Text 2</span>
      <span class="ml-4 cursor-pointer" on:click={handleClick}>Clickable Text 3</span>
      
</div>
</div>
