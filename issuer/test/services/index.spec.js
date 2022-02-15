'use strict'

const { expect } = require('chai')
const LitProtocolService = require('../../src/services/litProtocolService')

const authSig = {
  sig: '0x4f10d9749e5ee3493ab19bf308c3319cdb22c027bca3d6739e2a791eecbe802430a1f0da57375193dbc7d3b3adb07a53250210130d4dd64fb70971b6c2b486461b',
  derivedVia: 'web3.eth.personal.sign',
  signedMessage:
    'I am creating an account to use Lit Protocol at 2022-02-14T23:43:27.759',
  address: '0x3c4fafdedcc25c5f2653dbae3391517b33cc6778',
}

describe('LitProtocolService', async() => {
  let litProtocolService

  before(async() => {
    litProtocolService = await LitProtocolService.initlize()
  })

  it('.encrypt and then .decrypt', async() => {
    const message = { value: 'secret test' }
    const { encrypted, symmetricKey } = await litProtocolService.encrypt(message)
    expect(encrypted).to.be.not.undefined
    expect(symmetricKey).to.be.not.undefined

    const decrypted = await litProtocolService.decrypt(encrypted, symmetricKey)
    expect(decrypted).to.be.not.undefined
    expect(decrypted).to.be.deep.equal(message)
  })

  it('.saveKey and then .getKey', async() => {
    const message = { value: 'secret test' }
    const { encrypted, symmetricKey } = await litProtocolService.encrypt(message)

    const encryptedKeyHex = await litProtocolService.saveKey(symmetricKey, authSig)
    console.log('symmetricKey!!', symmetricKey)
    console.log('encryptedKeyHex!!', encryptedKeyHex)
    expect(encryptedKeyHex).to.be.not.undefined

    const pulledSymmetricKey = await litProtocolService.getKey(encryptedKeyHex, authSig)
    expect(pulledSymmetricKey).to.be.not.undefined
    expect(pulledSymmetricKey).to.be.equal(symmetricKey)
  })
})
