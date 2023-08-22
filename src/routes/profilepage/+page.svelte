<script lang="ts">
	import ChangesBox from './changesBox.svelte';
	import BottomNavbar from '../galleryview/bottomNavbar.svelte';
	const name: string = 'Hello, Lefteris';
	const email: string = 'example@example.com';


</script>

<h1 class="text-4xl font-extrabold dark:text-white mt-4 ml-4">{name}</h1>
<div class="flex items-center mt-2 ml-4">
	
	<span class="text-lg text-textwhite font-semibold">{email}</span>
</div>


