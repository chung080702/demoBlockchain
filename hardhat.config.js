require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_URL = "https://rinkeby.infura.io/v3/9a645fa99561497fa1954bdccd579a9d"
const ROPSTEN_URL = "https://ropsten.infura.io/v3/9a645fa99561497fa1954bdccd579a9d"

const PRIVATE_KEY = "0x5633b9938fbce54532dd4b4efef6655447db8c9bf709d36ad93aee2a13b89133";
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PRIVATE_KEY]
    },
    ropsten: {
      url: ROPSTEN_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
