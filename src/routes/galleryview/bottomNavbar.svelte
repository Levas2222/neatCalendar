<script lang="ts">
	let isSelectPressed = false;
	function toggleSelect() {
		isSelectPressed = !isSelectPressed;
        
	}
</script>

<div class="btm-nav">
	<button class="text-quinary active on:click={toggleSelect}">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        {#if isSelectPressed}
				<circle cx="12" cy="12" r="10" stroke-width="2" />
				<circle cx="12" cy="12" r="5" stroke-width="2" fill="currentColor" />
		{:else}

				<circle cx="12" cy="12" r="10" stroke-width="2" />
			
		{/if}

    </svg>
        
	</button>
	<button class="text-quinary active">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
			/></svg
		>
	</button>
	<button class="text-quinary active">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14M5 12h14" />
		</svg>
	</button>
</div>
