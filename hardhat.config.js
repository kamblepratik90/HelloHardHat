// LOCAL NETWORK
//  require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };

// MUMBAI TEST NETWORK

require("@nomiclabs/hardhat-ethers");
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["ce25ea05a902ba501d04da1594f587bf8ec7a7154a38ae5d04d0ff5806eefe3f"]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}