<script context="module">
	export const prerender = true;
</script>

<script>
	import { contract } from '$stores/ethers.js';

	let proposal = '';

	const submit = async () => {
		const tx = await $contract.createProposal(proposal);

		console.log(tx);
	};
</script>

<svelte:head>
	<title>Create a proposal</title>
	<meta name="description" content="Let's vote !" />
</svelte:head>

<form class="flex justify-between" on:submit|preventDefault={submit}>
	<input type="text" class="grow bg-grey-light py-4 border-b-2" placeholder="write your proposal" bind:value={proposal} />
	<button type="submit" class="bg-pink rounded p-4 ml-4 hover:bg-purple">submit</button>
</form>

<style>
	input {
		width: 300px;
	}
</style>
