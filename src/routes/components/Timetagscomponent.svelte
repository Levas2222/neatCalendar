<script lang="ts">
	import { onMount } from 'svelte';

	let allValues = '';
	let inputValue = '';
	let highlightedIndex = -1;

	/* Display Tags */
	let options = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
		'Weekday',
		'Mango',
		'Orange',
		'Peach',
		'Pear',
		'Pineapple'
	];

	let specificTags: string[] = [];

	let filteredOptions = options;

	let errorflag: string;

	function handleCommaSeparation(allValues: string) {
		const lastIndex = allValues.lastIndexOf(',');
		let taglist: string[] = [];

		if (lastIndex === -1) {
			inputValue = allValues;
			return [taglist, inputValue];
		} else {
			taglist = allValues.slice(0, lastIndex).split(',');
			inputValue = allValues.slice(lastIndex + 1);

			return [taglist, inputValue];
		}
	}
	function addSpaceAfterCommas(inputString: string): string {
		const charArray = inputString.split('');
		for (let i = 0; i < charArray.length; i++) {
			if (charArray[i] === ',' && i != charArray.length - 1 && charArray[i + 1] !== ' ') {
				charArray.splice(i + 1, 0, ' ');
			}
		}
		return charArray.join('');
	}

	function handleInputClick() {
		[specificTags, inputValue] = handleCommaSeparation(allValues);

		//illegal inputs
		const startregex = /^,/;
		const startmatch = startregex.exec(allValues.toLowerCase());

		const lengthmatch = inputValue.length > 20;

		if (startmatch) {
			inputElement.readOnly = true;
		}

		if (lengthmatch) {
			inputElement.readOnly = true;
		}

		//Modification to Input Line
		allValues = addSpaceAfterCommas(allValues);

		//Modification to Options
		filteredOptions = options.filter((option) =>
			option.toLowerCase().startsWith(inputValue.trim().toLowerCase())
		);

		//Instruction to Options Container
		if (filteredOptions.length === 0 || inputValue === '') {
			handleInputBlur();
		} else {
			handleInputFocus();
			positionOptions();
		}
	}

	/* Auto Complete Tags and handle text*/

	function completeInputText(option: string) {
		allValues = allValues.replace(inputValue, '');
		inputValue = '';
		allValues = allValues + option + ', ';

		handleInputClick();
		inputElement.focus();
	}

	/* Handle Navigation Around*/

	let isTimeInputFocused = false;
	let inputElement: HTMLInputElement;

	function handleInputFocus() {
		isTimeInputFocused = true;
	}

	function handleInputBlur() {
		isTimeInputFocused = false;
	}

	onMount(() => {
		window.addEventListener('click', (event: MouseEvent) => {
			if (event.target.id === 'TimeTags') {
				handleInputFocus();
			} else if (event.target.id != 'timeoptionContainer') {
				handleInputBlur();
			}
		});
	});

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			completeInputText(filteredOptions[0]);
		} else if (event.key === 'Tab') {
			if (inputElement.value != '') {
				event.preventDefault();
				completeInputText(filteredOptions[1]);
			}
		} else if (event.key === 'Escape') {
			handleInputBlur();
			inputElement.blur();
		} else if (event.key === 'Backspace' || event.key === 'Delete') {
			inputElement.readOnly = false;
		}
	}

	/* Handle Selection Container Positioning*/
	let optionsPosition = 0;
	let textWidth = 0;

	function positionOptions() {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		context.font = ' 14px Calibri';
		textWidth = context.measureText(allValues).width;

		optionsPosition = textWidth;
		optionsPosition = Math.max(20, Math.min(optionsPosition, 480));
	}
</script>

<div id="container" class="relative">
	<div class="w-full">
		
		<input
			id="TimeTags"
			type="tags"
			class="w-full bg-white rounded-lg border border-slate-800 p-4
      			pe-12 text-sm font-calibri shadow-sm focus:border-none"
            placeholder="Select the Days"
			bind:value={allValues}
			bind:this={inputElement}
			on:input={handleInputClick}
			on:keydown={handleKeyPress}
		/>

		{#if isTimeInputFocused}
			<div
				id="timeoptionContainer"
				class=" absolute z-10 mt-1 w-28 max-h-40 overflow-y-auto border border-slate-800 bg-white rounded-lg shadow-lg"
				style="scrollbar-width: none; -ms-overflow-style: none; top: 75%; left: {optionsPosition}px;"
			>
				{#each filteredOptions as option, index (option)}
					<div
						id="optioncontainer"
						class="p-2 cursor-pointer hover:bg-gray-100 transition duration-150"
						class:selected={index === highlightedIndex}
						on:click={() => {
							completeInputText(option);
						}}
					>
						{option}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
