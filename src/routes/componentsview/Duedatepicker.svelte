<script >
    export let duedateerror;
	let dueDateError = duedateerror[0];
	let dueDateErrorFlag = duedateerror[1];
    let inputa="2023-10-12";
</script>


<div class="flex justify-center mx-4 my-4">
	<span class="mx-1 mt-2">Due Date (Optional)</span>
    <div class="flex flex-col">
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

    {#if dueDateError}
    <span class="label-text-alt mx-4 px-2 text-redish font-bold select-none">{dueDateErrorFlag}</span>
    {/if}
    </div>
</div>