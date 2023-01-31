const { ethers } = require("hardhat");

const main = async () => {
  const DoggosContract = await ethers.getContractFactory("Doggos");
  const doggosContract = await DoggosContract.deploy();
  await doggosContract.deployed();

  console.log("Contract is deployed at: ", doggosContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
