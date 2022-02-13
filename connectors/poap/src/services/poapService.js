'use strict'
const ethers = require('ethers')
const abi = require('../abi/poap')
const { ANKR_JSONRPC_API_ENDPOINT } = process.env

const balance = await contract.balanceOf(address)
const POAP_CONTRACT_ADDRESS = 0x22c1f6050e56d2876009903609a2cc3fef83b415
const poap = await contract.tokenOfOwnerByIndex(address, 0)
const tokenURI = await contract.tokenURI(poap.toString())

class PoapService {
  constructor() {
    this._provider = new ethers.providers.JsonRpcProvider(
      ANKR_JSONRPC_API_ENDPOINT
    )
    this._contract = new ethers.Contract(POAP_CONTRACT_ADDRESS, abi, provider)
  }
  async getVerifiedAddress(digest, signature) {
    return ethers.utils.verifyMessage(digest, signature)
  }

  async getTokensOwner(address) {
    const balance = await this._contract.balanceOf(address)
    const tokens = []
    for (let i = 0; i < parseInt(balance.toString(), 10); i++) {
      const tokenId = await this._contract.tokenOfOwnerByIndex(address, i)
      const tokenURI = await this._contract.tokenURI(tokenId.toString())
      tokens.push(tokenURI)
    }

    return tokens
  }
}

module.exports = PoapService
