<script>
	import { ethers } from 'ethers';
	import WalletConnectProvider from '@walletconnect/web3-provider';
	import ABI from '$lib/Voting.js';
	import { signer, contract, provider } from '$stores/ethers.js';

	const connect = async () => {
		provider.set(
			new WalletConnectProvider({
				infuraId: 'd1becb18a48a47ee8f94f0e8491ec7dc'
			})
		);
		await $provider.enable();

		signer.set(new ethers.providers.Web3Provider($provider).getSigner());
		contract.set(new ethers.Contract('0x3e8923a12d41762D90090f480680EdfFB9FBbA8D', ABI, $signer).connect($signer));
	};

	const disconnect = async () => {
		await $provider.disconnect();
		provider.set(null);
		signer.set(null);
		contract.set(null);
		localStorage.clear();
	};

	const faucet = async () => {
		const address = await $signer.getAddress();
		console.log(address);
		await fetch('https://universitydapp.netlify.app/.netlify/functions/faucet?address=' + address);
	};
</script>

<header class="container flex flex-row justify-between mx-auto py-8 relative">
	<h1>just vote it</h1>

	{#if $signer}
		<button class="bg-pink rounded p-4 hover:bg-purple" on:click={faucet}>Faucet</button>

		<button class="bg-pink rounded p-4 hover:bg-purple" on:click={disconnect}>Disconnect</button>
	{:else}
		<button class="bg-pink rounded p-4 hover:bg-purple" on:click={connect}>Connect</button>
	{/if}
</header>

<style lang="scss">
	@keyframes animatedgradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	header {
		position: relative;
		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 5px;
			background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
			border-radius: 0;
			z-index: -1;
			animation: animatedgradient 3s ease alternate infinite;
			background-size: 300% 300%;
		}
	}
</style>
