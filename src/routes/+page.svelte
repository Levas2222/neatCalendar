<script lang="ts">
	import '../global.css';
	import EventComponent from './galleryview/eventComponent.svelte';
	import BottomNavbar from './galleryview/bottomNavbar.svelte';
	import Navbar from './galleryview/navbar.svelte';
	
</script>

<Navbar/>

<div
	class="h-auto flex-grow scrollable-area max-h-3/4 overflow-y-auto border border-gray-300 rounded p-4 mt-4"
>
	<EventComponent />
	<EventComponent />
</div>
<slot/>




