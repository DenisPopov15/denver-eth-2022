'use strict'
const fetch = require('node-fetch')
const { ISSUER_SERVICE_API_URL, ISSUE_CREDENTIALS_TYPE } = process.env
const createAuth = require('../helpers/createAuth')
const Validator = require('jsonschema').Validator
const v = new Validator()
class IssuerService {
  constructor() {}

  async validateDataAgainstSchema(data, schema) {
    return v.validate(data, schema)
  }

  async issueStructeredData(data, type) {
    return fetch(`${ISSUER_SERVICE_API_URL}/issueStructeredData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Auth: createAuth(),
      },
      body: JSON.stringify({
        data,
        type,
      }),
    })
      .then((res) => res.json())
      .catch(() => null)
  }
}

module.exports = IssuerService
