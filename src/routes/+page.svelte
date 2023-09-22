<script lang="ts">
	import '../global.css';
	import { onMount } from 'svelte';
	import EventComponent from './galleryview/eventComponent.svelte';
	import BottomNavbar from './galleryview/bottomNavbar.svelte';
	import Navbar from './galleryview/navbar.svelte';

	
	
	let responseData: string = "hello world";

</script>

<div class="min-h-screen border-none bg-whitish">
	<Navbar />
	<p>{responseData}</p>
	<div class=" flex-grow overflow-hidden border-none rounded p-4 mt-4">
		<EventComponent />
		<EventComponent />
	</div>
	<BottomNavbar />
</div>

<slot />
