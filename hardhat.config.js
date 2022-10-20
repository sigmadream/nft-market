const fs = require('fs');
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: "0.8.9",
};
