const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
	"(wallet mnemonic)",
	"https://rinkeby.infura.io/v3/458cbe2f02c146e8b988fa05a1f6815d"
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log("Attempting to deploy contracts from: ", accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: "1000000", from: accounts[0] });

	console.log("Contract deployed to: ", result.options.address);
};
deploy();
