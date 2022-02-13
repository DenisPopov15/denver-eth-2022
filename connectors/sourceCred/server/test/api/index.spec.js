'use strict'

const { expect } = require('chai')
const request    = require('supertest')

describe('SourceCred', async() => {
  it('pullSourceCredData', async() => {
    const response = await request(global.server)
      .get('/api/pullSourceCredData')
      .query({ identifier: 'Denis-Popov' })

    expect(response.body.sourceCredVCData).to.be.not.undefined
    expect(response.status).to.be.equal(200)
  })
})
