'use strict'

const fetch      = require('node-fetch')
const uncompress = require('../helpers/uncompress')
const { SOURCE_CRED_INSTANCE_DOMAIN } = process.env
const localDomain = 'http://localhost:6006'
const domain = SOURCE_CRED_INSTANCE_DOMAIN || localDomain

const instanceDataUrl = `${domain}/output/credGrainView`

class SourceCredService {
  constructor() {
    this._instanceGraphDataUrl = `${domain}/output/credGrainView`
  }

  async pullData() {
    const response = await fetch(this._instanceGraphDataUrl)
    const body = await response.buffer()

    const data = uncompress(body)

    return data
  }

  findParticipant(participants, identifier) {
    const participant = participants.find(p => { return p.identity.name === identifier })

    return participant
  }
}

module.exports = SourceCredService