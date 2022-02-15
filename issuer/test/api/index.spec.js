'use strict'

const { expect } = require('chai')
const request    = require('supertest')
const createAuth = require('../helpers/createAuth')

const holderDid = 'did:3:kjzl6cwe1jw149u7xahdzwu6nsuwnf8iygdv0b7sbfwr3hyospdcx5ila6pvwc0'

describe('Issuer', async() => {
  const auth = createAuth()

  it('issueStructeredData (deepskills)', async() => {
    const type = 'deepskills'
    const data = {
      holderDid,
      taskname:    'Turn corn flour into dough',
      description: 'Did it well'
    }

    const response = await request(global.server)
      .post('/api/issueStructeredData')
      .set('auth', auth)
      .send({ type, data, encrypt: true })

    expect(response.body.structeredData).to.be.not.undefined
    expect(response.status).to.be.equal(200)
  })
})
