<script lang="ts">


</script>


<div class="navbar bg-secondary">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
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
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
				<li><a href="/profilepage">Profile</a></li>
				<li><a href="/loginscreen">Sign Out</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<div class="join">
			<div>
				<div>
					<input class="input input-bordered join-item" placeholder="Search" />
				</div>
			</div>
			<select class="select join-item">
				<option disabled selected>Tags</option>
				<option>Tag 1</option>
				<option>Tag 2</option>
				<option />
			</select>
			<button class="btn btn-circle join-item">
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