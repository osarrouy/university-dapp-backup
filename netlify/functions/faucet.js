import { ethers } from 'ethers';

exports.handler = async function (event, context) {
	console.log(event.queryStringParameters);
	console.log(event.body);
	console.log(event.path);

	let amountInEther = '0.01';
	let wallet = ethers.Wallet.fromMnemonic('radio shy wolf unlock peanut shock olive entry cry honey page visa'); // 0x8cC0743af4C72866501F591D892e34c4167C8d19
	const provider = new ethers.providers.InfuraProvider('goerli', {
		projectId: 'd1becb18a48a47ee8f94f0e8491ec7dc',
		projectSecret: '931010e1a5b241b5be44d637245cc80c'
	});
	wallet = wallet.connect(provider);

	const tx = {
		to: event.queryStringParameters.address,
		value: ethers.utils.parseEther(amountInEther)
	};
	const receipt = await wallet.sendTransaction(tx);
	console.log(receipt.hash + '=>');
	console.log('Balance : ' + (await wallet.getBalance()).toString());
	return {
		statusCode: 200,
		body: JSON.stringify({ status: 'OK' })
	};
};
