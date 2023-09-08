<script>
	export let dateerror;
	let initDateError = dateerror[0];
	let initDateErrorFlag = dateerror[1];

	let inputa = '2023-10-12';
</script>

<div class="flex flex-row justify-center mx-4 my-4">
	<div class="flex justify-center flex-col">
		<div>
			<span class="mx-2 mt-2">Date</span>
			<input
				id="dateinput"
				type="date"
				class=" mb-4 mx-3 w-auto bg-white text-textdark
                border border-slate-800 p-4
                rounded-lg
				pe-12 text-sm shadow-sm focus:border-none px-7 py-2
                border border-rounded"
				bind:value={inputa}
			/>
		</div>
		{#if initDateError}
			<span class="label-text-alt mx-2 text-redish font-bold select-none">{initDateErrorFlag}</span>
		{/if}
	</div>
	<div>
		<span class="mx-2 mt-2 ">Time (Optional)</span>
		<input
			type="time"
			class=" mb-4 mx-3 bg-white text-textdark
                border border-slate-800 p-4
                rounded-lg
				pe-12 text-sm shadow-sm focus:border-none px-7 py-2
                border border-rounded"
			placeholder="11:30 AM"
		/>
	</div>
</div>
