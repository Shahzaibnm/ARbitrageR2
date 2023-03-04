
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require('dotenv').config();
const mnemonic = ['2efa216a2a0f349ef843ac86b1de915b975b356e097bf28f3ef29cb2ae4789bd'];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];
 
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
   plugins: ["truffle-plugin-verify"],
   api_keys: {
    etherscan: "9JRH3YCCQI1IFSGDM5F23B8CYWHE6GIBQ3",
    bscscan:"DI4TKG3CMHKYA9TXYSFCJ6J63ADMU8G9E1",
    polygonscan:"8MUVCNPEPKGX818X93V13JCH39U4WXH3ZX"
   },

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    // polygon RPC  = https://rpc-mumbai.maticvigil.com/


    Mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`),
      network_id: 1,
      confirmations: 2,
      // timeoutBlocks: 200,
      // networkCheckTimeout: 1000000000000,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 10000000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }      // Fetch exact version from solc-bin
    }
  }
};
