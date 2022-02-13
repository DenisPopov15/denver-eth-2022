'use strict'

const { knownDataTypes } = require('../helpers/index')

class IssuerService {
  constructor(didInstance) {
    this._did = didInstance
  }

  get did() {
    return this._did
  }

  async issue({ type, data }) {
    if (!knownDataTypes.includes(type)) {
      throw Error(`${type} data type not supported, supported are ${knownDataTypes}`)
    }

    const deepSkillsDocument = data
    deepSkillsDocument.issuerDid = this.did._id
    // TODO just hash should be signed and not whole document
    const jws = await this.did.createJWS(deepSkillsDocument)
    const signature = jws.signatures[0].signature
    deepSkillsDocument.signature = signature // Should whole proof section

    return deepSkillsDocument
  }
}

module.exports = IssuerService