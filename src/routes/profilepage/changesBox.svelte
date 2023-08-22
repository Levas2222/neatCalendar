<script lang="ts">
	let showNotification: string = 'false';

	function handleClick() {
		showNotification = 'true';
	}
</script>

<div class="mt-8 mx-8">
	<span class="text-lg mx-4 text-textwhite font-semibold">{showNotification}</span>
	<div class="w-auto mt-1 bg-black rounded-lg shadow-md p-8">
		<div class="flex flex-col mt-1">
			<span class="cursor-pointer mb-2 mt-2 text-orange-400" on:click={handleClick}>Mute Email</span
			>
			<span class="cursor-pointer mb-2 mt-2 text-orange-400" on:click={handleClick}
				>Change Email</span
			>
			<span class="cursor-pointer mb-2 text-orange-400" on:click={handleClick}
				>Clickable Password</span
			>
			<span class="cursor-pointer mb-2 mt-2 text-orange-400" on:click={handleClick}
				>Clickable Text 3</span
			>
		</div>
	</div>
</div>
