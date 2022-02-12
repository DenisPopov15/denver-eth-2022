"use strict"

const CoordinApeService = require("../services/coordinApeService")

const pullCoordinapeData = async (req, res) => {
  const { signature, address, data, hash } = req.body
  const coordinApeService = new CoordinApeService({ signature, address, data, hash })
  await coordinApeService.getToken()

  const rawData = await coordinApeService.pullData()

  const corrdinapeProfileVCData = rawData

  res.status(200).json({ corrdinapeProfileVCData })
}

module.exports = pullCoordinapeData
