'use strict'

const IssuerService  = require('../services/issuerService')
const CeramicService = require('../services/ceramicService')

const issueStructeredData = async(req, res) => {
  const { type, data } = req.body

  const ceramicService = new CeramicService()
  await ceramicService.initilize()

  const issuerService  = new IssuerService(ceramicService.did)
  
  const structeredData = await issuerService.issue({ type, data })
  
  await ceramicService.storeData(structeredData, type)

  res.status(200).json({ structeredData })
}

module.exports = issueStructeredData
