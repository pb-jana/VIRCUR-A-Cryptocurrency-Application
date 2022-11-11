//https://eth-goerli.g.alchemy.com/v2/taFZ5jXjD9j_EYmLCAjP-mhB7pFYQeU8



// require("@nomicfoundation/hardhat-chai-matchers");

// import "@nomiclabs/hardhat-waffle";
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/taFZ5jXjD9j_EYmLCAjP-mhB7pFYQeU8',
      accounts: ['e835031027c149a98aef12275aacf25d5b75b36bb4f9f5c3c8e512ed7a06e766']
    }
  }
};

