'use strict'

const SourceCredService = require('../services/sourceCredService')
const ISSUE_CREDENTIALS_TYPE = 'sourcecreds'
const IssuerService = require('../services/issuerService')
const schema = require('../helpers/schema')
const withTimeout = require('../helpers/withTimeout')

const issuer = new IssuerService()

const pullSourceCredData = withTimeout(async (req, res) => {
  try {
    let { identifiers, did, signature, digest, encrypt } = req.query
    // TODO: Check auth/signature, that its belong to it did/ethereum address
    // TODO: instead of identifiers recieve Github and Discord VCs, check it map accounts names based on that
    if (!identifiers?.length) {
      throw new Error('identifiers is empty')
    }
    identifiers = identifiers.split(',')
    const sourceCredService = new SourceCredService()
    const rawData = await sourceCredService.pullData()

    const preparedDataForIssue = sourceCredService.prepareDataForIssuer(
      rawData.participants(),
      identifiers
    )

    const validationResults = await issuer.validateDataAgainstSchema(
      preparedDataForIssue,
      schema,
      encrypt
    )

    if (validationResults.errors.length > 0) {
      throw new Error('schema got changed')
    }

    preparedDataForIssue.holderDid = did
    const issueResult = await issuer.issueStructeredData(
      preparedDataForIssue,
      ISSUE_CREDENTIALS_TYPE
    )

    res.status(200).json(issueResult)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

module.exports = pullSourceCredData
