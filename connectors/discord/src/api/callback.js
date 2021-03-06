'use strict'

const DiscordService = require('../services/discordService')
const IssuerService = require('../services/issuerService')
const { FRONTEND_REDIRECT_URL } = process.env
const ISSUE_CREDENTIALS_TYPE = 'discords'
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
      { servers, holderDid: did },
      ISSUE_CREDENTIALS_TYPE
    )

    userData.did = did

    const userVCData = userData
    const serversVCData = userServers


    res.status(302).redirect(FRONTEND_REDIRECT_URL)
  } catch (e) {
    res.status(302).redirect(FRONTEND_REDIRECT_URL)
  }
}

module.exports = callback
