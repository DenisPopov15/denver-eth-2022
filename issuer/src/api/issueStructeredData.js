'use strict'

const IssuerService = require('../services/issuerService')
const CeramicService = require('../services/ceramicService')

const issueStructeredData = async (req, res) => {
  try {
    let { type, data, encrypt } = req.body
    encrypt = encrypt || false

    const ceramicService = new CeramicService()
    await ceramicService.initilize()

    const issuerService = new IssuerService(ceramicService.did)

    const structeredData = await issuerService.issue({ type, data })

    await ceramicService.storeData(structeredData, type, encrypt)

    const structeredData = await issuerService.issue({ type, data })

    await ceramicService.storeData(structeredData, type)

    res.status(200).json({ structeredData })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

module.exports = issueStructeredData
