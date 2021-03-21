const SimpleStorageContract = require('./contracts/SimpleStorage.json');
const Web3 = require('web3');

example = async (accounts, contract) => {
  const price = '1000000000000000000';
  const receipt = await contract.methods.sendether().send({ from: accounts[0], value: price})
  const response = await contract.methods.iden.call();
  console.log(response)
  console.log(receipt)
}

Mount = async () => {
  const web3 = await new Web3('http://127.0.0.1:7545');
  const accounts = await web3.eth.getAccounts();
  // console.log('account: ', accounts);
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SimpleStorageContract.networks[networkId];
  const instance = new web3.eth.Contract(
    SimpleStorageContract.abi,  deployedNetwork && deployedNetwork.address
  )
  console.log(instance)
  await web3.eth.sendTransaction({ from: accounts[0], to: deployedNetwork.address, value: '1000000000000000000'})
  // const response = await instance.methods.iden().call()
  // console.log('response:', response)
  // example(accounts, instance)
  // await web3.eth.sendTransaction({ from: accounts[0], to: accounts[1], value: '1000000000000000000'})
  // const receipt = await instance.methods.withdraw().send({ from: accounts[2] })
}


Mount()
