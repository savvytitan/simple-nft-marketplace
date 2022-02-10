require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

// read metamask wallet's private key
const fs = require('fs');
const privateKey = fs.readFileSync('./.secret').toString();

// project id of your project registered in infura.io
const projectId = '';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [],
    },
  },
  solidity: '0.8.4',
};
