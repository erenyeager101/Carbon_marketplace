
const contractAddress = "0x4d11E031fCc9E7385fa7fa9278cFF0c11d56035D"; 
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addMine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "fromMineId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "toMineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CreditsTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EmissionsRecorded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "MarketRateUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "penaltyAmount",
				"type": "uint256"
			}
		],
		"name": "MinePenalized",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			}
		],
		"name": "penalizeMine",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "recordEmissions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "recordReductions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ReductionsRecorded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_marketRate",
				"type": "uint256"
			}
		],
		"name": "setMarketRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_penaltyAmount",
				"type": "uint256"
			}
		],
		"name": "setPenaltyAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_threshold",
				"type": "uint256"
			}
		],
		"name": "setThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fromMineId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "toMineId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferCredits",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			}
		],
		"name": "getCreditValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mineId",
				"type": "uint256"
			}
		],
		"name": "getMineData",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "emissions",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reductions",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "credits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mines",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "emissions",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reductions",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "credits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "penaltyAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "threshold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let contract;
let account;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            account = accounts[0];
            contract = new web3.eth.Contract(contractABI, contractAddress);
            console.log('Web3 connected');
        })
        .catch(error => {
            console.error('User denied account access or error:', error);
        });
} else {
    console.log('Please install MetaMask');
}

async function getAccounts() {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
}

async function getMineData(mineId) {
    try {
        const mineData = await contract.methods.getMineData(mineId).call();
        document.getElementById("mineData").innerText = `Name: ${mineData[0]}, Emissions: ${mineData[1]}, Reductions: ${mineData[2]}, Credits: ${mineData[3]}`;
    } catch (error) {
        console.error('Error fetching mine data:', error);
    }
}

async function recordEmissions(mineId, amount) {
    try {
        const accounts = await getAccounts();
        await contract.methods.recordEmissions(mineId, amount).send({ from: accounts });
        alert("Emissions recorded");
    } catch (error) {
        console.error('Error recording emissions:', error);
    }
}

async function recordReductions(mineId, amount) {
    try {
        const accounts = await getAccounts();
        await contract.methods.recordReductions(mineId, amount).send({ from: accounts });
        alert("Reductions recorded");
    } catch (error) {
        console.error('Error recording reductions:', error);
    }
}

async function transferCredits(fromMineId, toMineId, amount) {
    try {
        const accounts = await getAccounts();
        await contract.methods.transferCredits(fromMineId, toMineId, amount).send({ from: accounts });
        alert("Credits transferred");
    } catch (error) {
        console.error('Error transferring credits:', error);
    }
}

async function penalizeMine(mineId) {
    try {
        const accounts = await getAccounts();
        const penaltyAmount = web3.utils.toWei('10', 'ether'); 
        await contract.methods.penalizeMine(mineId).send({ from: accounts, value: penaltyAmount });
        alert("Mine penalized");
    } catch (error) {
        console.error('Error penalizing mine:', error);
    }
}

async function updateMarketRate(newRate) {
    try {
        const accounts = await getAccounts();
        await contract.methods.setMarketRate(web3.utils.toWei(newRate, 'ether')).send({ from: accounts });
        alert("Market rate updated");
    } catch (error) {
        console.error('Error updating market rate:', error);
    }
}

async function getCreditValue(mineId) {
    try {
        const value = await contract.methods.getCreditValue(mineId).call();
        document.getElementById("creditValue").innerText = `Estimated Credit Value: ${web3.utils.fromWei(value, 'ether')} ETH`;
    } catch (error) {
        console.error('Error fetching credit value:', error);
    }
}
