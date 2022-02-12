'use strict'

const IssuerService = require('../services/issuerService')
// const CeramicService = require('../services/ceramicService')

const issueStructeredData = async(req, res) => {
  const { type, data } = req.body

  const issuerService  = new IssuerService()
  const structeredData = await issuerService.issue({ type, data })

  // const ceramicService = new CeramicService()
  // await ceramicService.storeData(structeredData)

  res.status(200).json({ structeredData })
}

module.exports = issueStructeredData