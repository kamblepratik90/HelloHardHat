// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // When running the script with `npx hardhat run <script>` you'll find the Hardhat
// // Runtime Environment's members available in the global scope.
// const hre = require("hardhat");

// async function main() {
//   // Hardhat always runs the compile task when running scripts with its command
//   // line interface.
//   //
//   // If this script is run directly using `node` you may want to call compile
//   // manually to make sure everything is compiled
//   // await hre.run('compile');

//   // We get the contract to deploy
//   const Storage = await hre.ethers.getContractFactory("Storage");
//   var myNum = Storage.getNumber();
//   console.log("myNumber -> ", myNum);
//   Storage.storeNumber(21);
//   myNum = Storage.getNumber();
//   console.log("after storing new number, myNumber -> ", myNum);


// //   const storage = await Storage.deploy();

// //   await storage.deployed();

// //   console.log("Storage deployed to:", storage.address);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });



const ethers = require("ethers");
// config.js
const dotenv = require('dotenv');
dotenv.config();

// for provider - https://rpc.maticvigil.com/ 
const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/v1/" + process.env.RPC_MATICVIGIL_APP_ID);

// for signer
var privateKey = process.env.PRIVATE_KEY;
var signer = new ethers.Wallet(privateKey, provider);

// Address and ABI
var address = process.env.STORAGE_CONTRACT_ADDRESS;
var abi = [
    {
        "inputs": [],
        "name": "getNumber",
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
        "name": "number",
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
            "name": "_number",
            "type": "uint256"
          }
        ],
        "name": "storeNumber",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
];

// Smart Contract instance creation
myContract_write = new ethers.Contract(address, abi, signer)    // Write only
myContract_read = new ethers.Contract(address, abi, provider)  // Read only

// Writing to Smart Contract
myContract_write.storeNumber(100).then((result) => {
     console.log("storeNumber - ", result);
})
// Reading from Smart Contract
myContract_read.getNumber().then((result) => {
     console.log("getNumber -> ", result);
     console.log("getNumber = ", parseInt(result._hex, 16));
})