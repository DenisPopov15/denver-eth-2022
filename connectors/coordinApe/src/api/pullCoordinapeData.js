'use strict'

const CoordinApeService = require('../services/coordinApeService')
const IssuerService = require('../services/issuerService')

const pullCoordinapeData = async (req, res) => {
  const { signature, address, data, hash } = req.body
  const issuerService = new IssuerService()
  const coordinApeService = new CoordinApeService({
    signature,
    address,
    data,
    hash,
  })
  const token = await coordinApeService.getToken()
  coordinApeService.setToken(token)
  const rawData = await coordinApeService.pullData()
  
  const result = await issuerService.issueStructeredData(rawData)

  const cordinapeProfileVCData = {
    skills: rawData?.profile?.skills,
    rest: rawData,
  }

  res.status(200).json({ cordinapeProfileVCData, result })
}

module.exports = pullCoordinapeData

