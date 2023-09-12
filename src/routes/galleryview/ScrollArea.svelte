<script lang="ts">
	import { onMount } from 'svelte';
	import InfiniteScroll from './InfiniteScroll.svelte';

	// if the api (like in this example) just have a simple numeric pagination
	let page = 0;
	// but most likely, you'll have to store a token to fetch the next page
	let nextUrl = '';
	// store all the data here.
	let data = [];
	// store the new batch of data here.
	let newBatch = [];

	async function fetchData() {
		const response = await fetch(
			`https://api.openbrewerydb.org/breweries?by_city=los_angeles&page=${page}`
		);
		newBatch = await response.json();
		console.log(newBatch);
	}

	onMount(() => {
		// load first batch onMount
		fetchData();
	});

	$: data = [...data, ...newBatch];
</script>

<div>
	<h4>Infinite Scroll Component for Svelte</h4>
	<ul>
		{#each data as item}
			<li>{item.name}</li>
		{/each}
		<InfiniteScroll
			hasMore={newBatch.length}
			threshold={100}
			on:loadMore={() => {
				page++;
				fetchData();
			}}
		/>
	</ul>
	<h5>
		All items loaded: {newBatch.length ? 'No' : 'Yes'}
	</h5>
</div>
