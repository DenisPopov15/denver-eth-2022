'use strict'

const { expect }  = require('chai')
const fs          = require('fs')
const path        = require('path')

const createAuth  = require('../../src/helpers/createAuth')
const uncompress  = require('../../src/helpers/uncompress')

describe('Helpers', async() => {
  it('createAuth', async() => {
    const token = await createAuth()

    expect(token).to.be.not.undefined
  })

  it('uncompress', async() => {
    const filePath = path.resolve(__dirname, './credGrainView')
    const data   = fs.readFileSync(filePath)
    const result = await uncompress(data)

    expect(result.participants.length > 0).to.be.true
  })
})
