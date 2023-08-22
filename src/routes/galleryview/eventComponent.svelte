<script lang="ts">
	const name: string = 'Man Utd vs Totenham 0-2';
	const tags: string[] = ['Football', 'Sports','Football', 'Sports','Football', 'Sports','Football', 'Sports','Football', 'Sports','Football', 'Sports','Football', 'Sports'];
</script>

<div class="block bg-tertiary border p-4 mb-4 shadow-md rounded-lg">
	<span class="inline-block">
		<span class="text mt-2 mx-1 text-textwhite font-semibold">{name}</span>
		{#each tags as tag}
			<span class="bg-primary mx-1  text-textwhite rounded px-2 py-1 text-sm">
				{tag}
			</span>
		{/each}
	</span>
	<div class="remaining-time flex justify-between items-right mt-2 text-textwhite text-sm">
		<span data-end="2023-08-25T00:00:00">Calculating...</span>
	</div>
</div>

<style>
</style>
