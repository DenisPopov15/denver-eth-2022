'use strict'

const IssuerService  = require('../services/issuerService')
const CeramicService = require('../services/ceramicService')

const issueStructeredData = async(req, res) => {
  let { type, data, encrypt } = req.body
  encrypt = encrypt || false

  const ceramicService = new CeramicService()
  await ceramicService.initilize()

  const issuerService  = new IssuerService(ceramicService.did)

  const structeredData = await issuerService.issue({ type, data })

  await ceramicService.storeData(structeredData, type, encrypt)

  res.status(200).json({ structeredData })
}

module.exports = issueStructeredData
