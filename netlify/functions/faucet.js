// import { ethers } from 'ethers';

exports.handler = async function (event, context) {
	console.log(event.queryStringParameters);
	console.log(event.body);
	console.log(event.path);
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Hello World', test: 'test' })
	};
};

// const test = async () => {
// 	let amountInEther = '0.05';
// 	let wallet = ethers.Wallet.fromMnemonic('radio shy wolf unlock peanut shock olive entry cry honey page visa');
// 	const provider = new ethers.providers.InfuraProvider('goerli', {
// 		projectId: 'd1becb18a48a47ee8f94f0e8491ec7dc',
// 		projectSecret: '931010e1a5b241b5be44d637245cc80c'
// 	});
// 	wallet = wallet.connect(provider);

// 	console.log('Balance : ' + (await wallet.getBalance()).toString());

// 	let tx = {
// 		to: '0x8873b045d40a458e46e356a96279ae1820a898ba',
// 		value: ethers.utils.parseEther(amountInEther)
// 	};

// 	const receipt = await wallet.sendTransaction(tx);
// 	console.log(receipt.hash + '=>');
// };

// test().then(() => console.log('done'));
