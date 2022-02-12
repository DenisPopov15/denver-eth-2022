'use strict'

const SourceCredService = require('../services/sourceCredService')

const pullSourceCredData = async(req, res) => {
  const { code, did } = req.query

  const sourceCredService = new SourceCredService()
  const rawData = await sourceCredService.pullData()

  const sourceCredVCData = {
    someData: rawData.something
  }

  res.status(200).json({ sourceCredVCData })
}

module.exports = pullSourceCredData