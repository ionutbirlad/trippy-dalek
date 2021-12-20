async function main() {
    const TrippyDalek = await ethers.getContractFactory("TrippyDalek")
  
    // Start deployment, returning a promise that resolves to a contract object
    const trippyDalek = await TrippyDalek.deploy()
    console.log("Contract deployed to address:", trippyDalek.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  