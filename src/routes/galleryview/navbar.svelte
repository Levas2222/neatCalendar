<script lang="ts">

let selected=0;
function handleSelect(){

	selected=0;

}


</script>


<div class="navbar bg-secondarydark border-secondarydark">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</label>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primarylight rounded-box w-52">
				<li><a href="/profilepage">Profile</a></li>
				<li><a href="/loginscreen">Sign Out</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<div class="join">
			<div>
				<div>
					<input class="input input-bordered rounded-full join-item" placeholder="Search" />
				</div>
			</div>
			<select bind:value={selected}  class="select select-bordered join-item" >
				
				<option disabled value="0">Tags</option>
				<option value="1" on:click={handleSelect}>None</option>
				<option value="2">One</option>
				<option value="3">Two</option>
				
			</select>
			<button class="btn border-textgray btn-circle join-item rounded-full">
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
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		</div>
	</div>
	<div class="navbar-end" />
</div>