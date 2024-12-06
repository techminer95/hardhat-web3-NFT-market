const hre = require("hardhat");

async function main() {
  // Ensure the contract name is correct
  const NFTMarketplace = await hre.ethers.getContractFactory("MyNFTMarketplace");

  // Deploy the contract
  const nftMarketplace = await NFTMarketplace.deploy();
  
  // Wait for deployment to be finished
  await nftMarketplace.deployed();

  // Log the deployed contract address
  console.log(`NFTMarketplace deployed on address: ${nftMarketplace.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
