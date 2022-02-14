'use strict'
const fetch = require('node-fetch')
const API_URL = 'https://api.coordinape.com/api/v2'
class CoordinApeService {
  constructor({ signature, address, data }) {
    this._signature = signature
    this._address = address
    this._data = data
    this._token = undefined
  }
  setToken(token) {
    this._token = token
  }
  async getToken() {
    const { token } = await fetch(`${API_URL}/login`, {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        signature: this._signature,
        hash: '',
        data: this._data,
        address: this._address,
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    }).then((resp) => resp.json())
    return token
  }
  async pullData() {
    let data = await fetch(`${API_URL}/manifest`, {
      headers: {
        authorization: `Bearer ${this._token}`,
      },
      method: 'GET',
    }).then((resp) => resp.json())
    return data
  }
}

module.exports = CoordinApeService
