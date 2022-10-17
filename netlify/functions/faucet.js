// import { ethers } from 'ethers';

exports.handler = async function (event, context) {
	console.log(context.queryStringParameters);
	console.log(context.body);
	console.log(context.path);
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Hello World', test: 'test' })
	};
};

// const test = async () => {
// 	let wallet = ethers.Wallet.fromMnemonic('radio shy wolf unlock peanut shock olive entry cry honey page visa');
// 	const provider = new ethers.providers.InfuraProvider('goerli', {
// 		projectId: 'd1becb18a48a47ee8f94f0e8491ec7dc',
// 		projectSecret: '931010e1a5b241b5be44d637245cc80c'
// 	});
// 	console.log(wallet);
// 	console.log(provider);
// 	wallet = wallet.connect(provider);
// 	console.log(await (await wallet.getBalance()).toString());
// };

// test().then(() => console.log('done'));
