<script lang="ts">
	import Duedatepicker from '../Duedatepicker.svelte';
	import Initialdatepicker from '../Initialdatepicker.svelte';
	import Spaceddate from '../Spaceddate.svelte';
	import Tagscomponent from '../Tagscomponent.svelte';
	import Timetagscomponent from '../Timetagscomponent.svelte';

	import type {PageData} from '../$types';

	export let data:PageData;

	let status="New"; //New, Edit ,View
	
	let name = data.post.name;
	let description = '';
	let tags = '';
	let initialdate = '';
	let initialtime = '';
	let isRepeated = false;
	let emailNotifications = false;

	let nameError = false;
	let nameErrorflag = 'Not a valid name for an event.';

	let tagError = false;
	let tagErrorflag = 'Not valid tags for an event.';

	let initDateError = false;
	let initDateErrorFlag = 'Not a valid initial date';

	let timeTagError = false;
	let timeTagErrorFlag = 'Not valid days to be repeated';

	let dueDateError = false;
	let dueDateErrorFlag = 'Not a valid due date';

	let invalidForm: Boolean = false;
	let invalidFormFlag: string = 'Not valid inputs';

	
	function addEvent() {
		if (isRepeated) {
			if (nameError && tagError && initDateError) {
				invalidForm = true;
			} else {
				invalidForm = false;
			}
		} else {
			if (nameError && tagError && initDateError && timeTagError && dueDateError) {
				invalidForm = true;
			} else {
				invalidForm = false;
			}
		}
	}
</script>


<form method="POST" action="?/add">
	<!-- Characterizing the Event-->
	<div class="h-screen w-screen flex items-center justify-center bg-secondarydark backdrop-blur">
		<div class="rounded-lg p-6 bg-whitish text-textgray shadow-lg w-5/6 h-5/6">
			<div class="mb-{nameError ? '2' : '4'}">
				<input
					type="name"
					class="w-full bg-white rounded-lg border border-slate-800 p-4
							pe-4 text-sm shadow-sm focus:border-none"
					placeholder="Name"
					bind:value={name}
				/>
				{#if nameError}
					<span class="label-text-alt mx-2 text-redish font-bold select-none">{nameErrorflag}</span>
				{/if}
			</div>
			<div class="mb-4">
				<textarea
					type="description"
					class="w-full bg-white rounded-lg border border-slate-800 p-4
							pe-12 text-sm shadow-sm focus:border-none px-3 py-3"
					placeholder="Discription"
				/>
			</div>
			<div class="mb-{tagError ? '2' : '4'}">
				<Tagscomponent />
				{#if tagError}
					<span class="label-text-alt mx-2 text-redish font-bold select-none">{tagErrorflag}</span>
				{/if}
			</div>
			<Initialdatepicker dateerror={[initDateError, initDateErrorFlag]} />

			<!-- Toggle Box-->
			<div class="my-4 w-full items-center justify-center">
				<div class="flex flex-row rounded-lg relative bg-transparent items-center justify-center ">
					<div class="h-12 mx-4 border border-textdark rounded-full">
						<span class="label-text text-textdark">Email Notification</span>
						<input type="checkbox" class="toggle toggle-accent" bind:checked={emailNotifications} />
					</div>
					<div class="h-12  mx-4 border border-textdark rounded-full">
						<span class="label-text text-textdark">Repeated Event</span>
						<input type="checkbox" class="toggle toggle-accent" bind:checked={isRepeated} />
					</div>
				</div>
			</div>






			{#if isRepeated}
				<div class="flex flex-col">
					<div class="form-control h-auto">
						<Timetagscomponent timeerror={[timeTagError,timeTagErrorFlag]}/>
					</div>

					<Spaceddate />
					<Duedatepicker duedateerror={[dueDateError, dueDateErrorFlag]} />
				</div>
			{/if}

			<!-- Buttons Box-->
			<div class="m-4 flex w-full justify-center items-center h-auto">
				<div class="space-x-4">
					<button class="btn btn-outline w-24">Cancel</button>
					<button on:click={addEvent} class="btn btn-outline btn-accent w-24">Add</button>
				</div>
			</div>
			{#if invalidForm}
				<span class="label-text-alt mx-2 text-redish font-bold select-none">{invalidFormFlag}</span>
			{/if}
		</div>
	</div>
</form>