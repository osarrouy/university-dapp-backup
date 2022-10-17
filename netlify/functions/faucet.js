// import { ethers } from 'ethers';

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Hello World', test: 'test', address: context.queryStringParameters.address })
	};
};

// const test = async () => {
// 	let wallet = ethers.Wallet.fromMnemonic('radio shy wolf unlock peanut shock olive entry cry honey page visa');
// 	const provider = new ethers.InfuraProvider('goerli', {
// 		projectId: projectId,
// 		projectSecret: projectSecret
// 	});
// 	console.log(wallet);
// 	// wallet = walletMnemonic.connect(provider);
// 	console.log(await wallet.getBalance());
// };

// test().then(() => console.log('done'));
