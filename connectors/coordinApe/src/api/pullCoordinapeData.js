'use strict'

const CoordinApeService = require('../services/coordinApeService')

const pullCoordinapeData = async(req, res) => {
  const { signature, address, data } = req.query

  const coordinApeService = new CoordinApeService({ signature, address, data })
  const rawData = await coordinApeService.pullData()

  const corrdinapeProfileVCData = {
    comments:      rawData.something,
    givesReceived: rawData.something,
    givesSent:     rawData.something,
    comments:      rawData.something
  }

  res.status(200).json({ corrdinapeProfileVCData })
}

module.exports = pullCoordinapeData