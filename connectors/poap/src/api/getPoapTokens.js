'use strict'

const PoapService = require('../services/poapService')

const poapService = new PoapService()

const getPoapTokens = async (req, res) => {
  try {
    const { address, signature, digest } = req?.body
    const addressFromSignature = poapService.getVerifiedAddress(
      digest,
      signature
    )
    if (addressFromSignature !== address) {
      throw new Error('Invalid address')
    }
    const tokensUrl = await poapService.getTokensUrlOwnedBy(address)
    res.status(200).json(tokensUrl)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = getPoapTokens
