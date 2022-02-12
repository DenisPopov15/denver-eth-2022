'use strict'

const supportedDataTypes = ['coordinape', 'github', 'discord', 'sourceCred'] // shoulf be more general/reusable defined structered data instead

class IssuerService {
  constructor() {
  }

  async issue({ type, data }) {
    return {}
  }
}

module.exports = IssuerService