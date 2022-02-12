'use strict'

const { expect } = require('chai')
const request    = require('supertest')
const createAuth = require('../helpers/createAuth')

const type = 'github'
const data = {}

describe('Issuer', async() => {
  const auth = createAuth()

  it('issueStructeredData', async() => {
    const response = await request(global.server)
      .post('/api/issueStructeredData')
      .set('auth', auth)
      .send({ type, data })

    expect(response.body.structeredData).to.be.not.undefined
    expect(response.status).to.be.equal(200)
  })
})
