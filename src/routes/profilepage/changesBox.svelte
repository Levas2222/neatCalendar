<script lang="ts">
	let showNotification: boolean = false;

	function handleClick() {
		showNotification = true;
	}
</script>

<div class="max-w-md mx-auto p-4">
	<div class="mb-4">
		<div class="bg-gray-200 p-4">
			<span class="cursor-pointer" on:click={handleClick}>Clickable Text 1</span>
			<span class="ml-4 cursor-pointer" on:click={handleClick}>Clickable Text 2</span>
			<span class="ml-4 cursor-pointer" on:click={handleClick}>Clickable Text 3</span>
		</div>
	</div>
	<div
		class="notification bg-green-500 text-white p-2 rounded-md mb-4"
		class:active={showNotification}
	>
		Notification Message
	</div>
</div>

<style>
	.notification {
		transition: opacity 0.3s ease-in-out;
	}

	.notification.active {
		opacity: 1;
	}
</style>
