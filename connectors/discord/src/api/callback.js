'use strict'

const DiscordService = require('../services/discordService')
const IssuerService = require('../services/issuerService')
const { ISSUE_CREDENTIALS_TYPE } = process.env
const schema = require('../helpers/schema')

const issuer = new IssuerService()

const callback = async (req, res) => {
  try {
    const { code, state: did } = req.query

    const discordService = await DiscordService.initialize(code)
    const userData = await discordService.getUserData()
    const userServers = await discordService.getUserServers()

    const servers = discordService.prepareDataForIssuing(userServers)

    const validationResults = await issuer.validateDataAgainstSchema(
      { servers },
      schema
    )

    if (validationResults.errors.length > 0) {
      throw new Error('schema got changed')
    }

    const issueResult = await issuer.issueStructeredData(
      { servers },
      ISSUE_CREDENTIALS_TYPE
    )

    userData.did = did

    const userVCData = userData
    const serversVCData = userServers

    res.status(200).json({ userVCData, serversVCData, issueResult })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

module.exports = callback
