<script context="module">
	export const prerender = true;
</script>

<script>
	import { signer, contract } from '$stores/ethers.js';

	let nbOfProposals = 0;
	let proposals = [];

	const fetch = async () => {
		console.log('fetching');
		if ($contract) {
			let _proposals = [];
			nbOfProposals = (await $contract.nbOfProposals()).toNumber();

			for (let i = 0; i < nbOfProposals; i++) {
				const results = await $contract.getVotes(i);
				_proposals[i] = {
					index: i,
					msg: await $contract.getProposal(i),
					yes: results.yes.toNumber(),
					no: results.no.toNumber(),
					isVoted: await $contract.isVotedBy(i, await $signer.getAddress())
				};
			}

			proposals = _proposals;
			console.log(proposals);
		}

		setTimeout(fetch, 5000);
	};

	contract.subscribe((_contract) => {
		if (_contract) {
			fetch();
		}
	});

	const vote = async (proposal, _vote) => {
		const tx = await $contract.vote(proposal, _vote);

		console.log(tx);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Let's vote !" />
</svelte:head>

{#if $signer && $contract}
	<table>
		<tr class="text-left">
			<th>Proposal</th>
			<th>Yes</th>
			<th>No</th>
		</tr>
		{#each proposals as proposal}
			<tr>
				<td>{proposal.msg}</td>
				<td>{proposal.yes}</td>
				<td>{proposal.no}</td>
				{#if !proposal.isVoted}
					<td
						><button class="bg-green rounded p-2 hover:bg-purple" on:click={() => vote(proposal.index, true)}>Yes</button><button
							class="bg-red rounded p-2 ml-2 hover:bg-purple"
							on:click={() => vote(proposal.index, false)}>No</button
						></td
					>
				{/if}
			</tr>
		{/each}
	</table>
{:else}
	<p>Please connect your wallet so we can do stuff ...</p>
{/if}
