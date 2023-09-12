<script lang="ts">
	let selected: Number;

	let spaceFromEvents = 0;
	function spaceIncrement() {
		spaceFromEvents += 1;
	}
	function spaceDecrement() {
		if (spaceFromEvents >= 1) {
			spaceFromEvents -= 1;
		}
	}
</script>

<div class="mx-4 my-4 w-full">
	<div class="flex flex-row h-12 rounded-lg relative bg-transparent mt-1">
		<span class="mt-3 mx-4">Select the time between events</span>
		<div class="join">
			<select
				bind:value={selected}
				class="select select-bordered  border rounded-lg h-12 join-item
					bg-white border-slate-800 text-textdark hover:text-textgray "
			>
				<option value="0">Hours</option>
				<option selected value="1">Days</option>
				<option value="2">Weeks</option>
			</select>

			<button
				data-action="decrement"
				class="join-item bg-white border 
				        border-slate-800 text-textdark hover:text-textgray 
				        h-full w-12 rounded-l cursor-pointer outline-none"
				on:click={spaceDecrement}
			>
				<span class="m-auto text-2xl font-thin">−</span>
			</button>
			<input
				type="number"
				class="no-spin join-item outline-none focus:outline-none text-center w-12
						bg-white border font-semibold 
						text-md border-slate-800 text-textdark hover:text-textgray 
                       focus:text-black md:text-basecursor-default
                       flex items-center text-gray-700 outline-none"
				name="custom-input-number"
				bind:value={spaceFromEvents}
			/>
			<button
				data-action="increment"
				class="join-item w-12 bg-white border border-slate-800 text-textdark hover:text-textgray hover:bg-slate-100 h-full rounded-r cursor-pointer"
				on:click={spaceIncrement}
			>
				<span class="m-auto text-2xl font-thin">+</span>
			</button>
		</div>
	</div>
</div>

<style>
	input.no-spin {
		appearance: none; /* Removes default arrows in most browsers */
		-moz-appearance: 'textfield'; /* Firefox */
		-webkit-appearance: textfield; /* Safari */
	}
</style>
