'use strict'

const getRandomValues = () => {}
global.window = { crypto: { getRandomValues } }

const Blob = require('cross-blob')
global.Blob = Blob

if (!Blob) {
  globalThis.Blob = require('cross-blob')
}

const LitJsSdk = require('lit-js-sdk/build/index.node.js')
const { CHAIN } = process.env
const chain = CHAIN

const accessControlConditions = [
  {
    contractAddress: '',
    standardContractType: '',
    chain,
    method: 'eth_getBalance',
    parameters: [
      ':userAddress',
      'latest'
    ],
    returnValueTest: {
      comparator: '>=',
      value: '0'
    }
  }
]

class LitProtocolService {
  constructor(litNodeClient) {
    this._litNodeClient = litNodeClient
  }

  static async initlize() {
    const litNodeClient = new LitJsSdk.LitNodeClient({
      alertWhenUnauthorized: false,
    })
    await litNodeClient.connect()

    return new LitProtocolService(litNodeClient)
  }

  async encrypt(message) {
    const string = JSON.stringify(message)
    // let { encryptedZip, symmetricKey } = await LitJsSdk.zipAndEncryptString(string)
    let { encryptedString, symmetricKey } = await LitJsSdk.encryptString(string)

    const encrypted = encryptedString
    // const encrypted = await encryptedString.text()
    symmetricKey = LitJsSdk.uint8arrayToString(symmetricKey, 'base16')

    return { encrypted, symmetricKey }
  }

  async decrypt(encrypted, symmetricKeyHex) {
    // const encryptedBlob = new Blob([encrypted])
    const encryptedBlob = encrypted
    const symmetricKey = LitJsSdk.uint8arrayFromString(symmetricKeyHex, 'base16')

    const decryptedString = await LitJsSdk.decryptString(encryptedBlob, symmetricKey)
    const decrypted = JSON.parse(decryptedString)

    return decrypted
  }

  async saveKey(symmetricKeyHex, authSig) {
    const symmetricKey = LitJsSdk.uint8arrayFromString(symmetricKeyHex, 'base16')

    const encryptedKey = await this._litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain,
      // permanant: 0
    })

    const encryptedKeyHex = LitJsSdk.uint8arrayToString(encryptedKey, 'base16')

    return encryptedKeyHex
  }

  async getKey(encryptedKeyHex, authSig) {
    const symmetricKey = await this._litNodeClient.getEncryptionKey({
      accessControlConditions,
      toDecrypt: encryptedKeyHex,
      chain,
      authSig
    })

    const symmetricKeyHex = LitJsSdk.uint8arrayToString(symmetricKey, 'base16')

    return symmetricKeyHex
  }

}

module.exports = LitProtocolService
