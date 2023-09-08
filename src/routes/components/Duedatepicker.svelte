<script >
    export let duedateerror;
	let initDateError = duedateerror[0];
	let initDateErrorFlag = duedateerror[1];
    let inputa="2023-10-12";
</script>


<div class="flex justify-center mx-4 my-4">
	<span class="mx-1 mt-2">Due Date (Optional)</span>
	<input
        id=dateinput
		type="date"
        
		class=" mb-4 mx-3 bg-white text-textdark
                border border-slate-800 p-4
                rounded-lg
				pe-12 text-sm shadow-sm focus:border-none px-7 py-2
                border border-rounded"
        bind:value={inputa}

	/>

    {#if initDateError}
    <span class="label-text-alt mx-2 text-redish font-bold select-none">{initDateErrorFlag}</span>
    {/if}
</div>