'use strict'

class CoordinApeService {
  constructor({ signature, address, data }) {
    this._signature = signature
    this._address   = address
    this._data      = data
  }

  async pullData() {
    return {}
  }

}

module.exports = CoordinApeService