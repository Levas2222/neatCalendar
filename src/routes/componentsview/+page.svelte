<script>
	let name = '';
	let description = '';
	let tags = '';
	let toggle = false;

	import Autocompleteinput from '../components/Autocompleteinput.svelte';
	

</script>

<div class="h-screen w-screen flex items-center justify-center bg-secondarydark backdrop-blur">
	<div class="rounded-lg p-6 bg-whitish text-textgray shadow-lg w-5/6 h-5/6">
		<div class="mb-4">
			<input
				type="name"
				class="w-full bg-white rounded-lg border border-slate-800 p-4
						pe-12 text-sm shadow-sm focus:border-none"
				placeholder="Name"
			/>
		</div>
		<div class="mb-4">
			<textarea
				class="w-full bg-white rounded-lg border border-slate-800 p-4
						pe-12 text-sm shadow-sm focus:border-none px-3 py-2"
				placeholder="Discription"
			/>
		</div>
		<div class="mb-4">
			<input
				type="email"
				class="w-full bg-white rounded-lg border border-slate-800 p-4
						pe-12 text-sm shadow-sm focus:border-none"
				placeholder="Tags"
			/>
		</div>
		<div class="form-control w-full justify-left">
			<label class="cursor-pointer label">
				<span class="label-text text-black">Email Notify ?</span>
				<input type="checkbox" class="toggle toggle-accent" checked />
				<span class="label-text">Repeated ?</span>
				<input type="checkbox" class="toggle toggle-accent" checked />
			</label>
		</div>

		<div class="form-control w-full h-auto">
			
				<span class="label-text">In every ....</span>
				<Autocompleteinput/>
	
		</div>
		<div class="m-4 flex w-full justify-center items-center h-auto">
			<div class="space-x-4">
				<button class="btn btn-outline w-24">Cancel</button>
				<button class="btn btn-outline btn-accent w-24">Add</button>
			</div>
		</div>
	</div>
</div>

<style>
	/* Add custom styles here */
</style>
