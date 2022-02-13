'use strict'

const SourceCredService = require('../services/sourceCredService')

const pullSourceCredData = async(req, res) => {
  let { identifier } = req.query
  identifier = identifier || 'Dmytro-Filipenko'

  const sourceCredService = new SourceCredService()
  const rawData = await sourceCredService.pullData()

  const participant = sourceCredService.findParticipant(rawData.participants, identifier)

  delete participant.credPerInterval
  delete participant.grainEarnedPerInterval

  res.status(200).json({ sourceCredVCData: participant })
}

module.exports = pullSourceCredData