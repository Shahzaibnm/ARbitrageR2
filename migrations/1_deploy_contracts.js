const ArbitrageBot = artifacts.require("ArbitrageBot");

module.exports = function(deployer) {

  deployer.deploy(ArbitrageBot,"0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e");
};