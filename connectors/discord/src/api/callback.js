'use strict'

const DiscordService = require('../services/discordService')

const callback = async(req, res) => {
  const { code, state: did } = req.query

  const discordService = await DiscordService.initialize(code)
  const userData    = await discordService.getUserData()
  const userServers = await discordService.getUserServers()

  userData.did = did

  const userVCData    = userData
  const serversVCData = userServers

  res.status(200).json({ userVCData, serversVCData })
}

module.exports = callback