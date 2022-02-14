'use strict'

const { expect } = require('chai')
const request    = require('supertest')

const did = '0x3c4fAFDedCc29C5f2653DbAE3391917b33Cc6378'

describe('Discord', async() => {
  it('discordRedirect', async() => {
    const host = 'https://test.com'

    const response = await request(global.server)
      .get('/api/discordRedirect')
      .query({ host, did })

    expect(response.status).to.be.equal(302)
  })

  it('discordCallback', async() => {
    const code = 'SomeGithubCode'

    const response = await request(global.server)
      .get('/api/discordCallback')
      .query({ code, did })

    expect(response.body.userVCData).to.be.not.undefined
    expect(response.status).to.be.equal(200)
  })
})
