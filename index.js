const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:8545')

web3.eth
  .getAccounts()
  .then(console.log)

web3.eth
  .getBlockNumber()
  .then(console.log)

web3.eth
  .getBalance('0x61ACc15D19D34904eB32313F9891AF9d58CdC9E1')
  .then(console.log)