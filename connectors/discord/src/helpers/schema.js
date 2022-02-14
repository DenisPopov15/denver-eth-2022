module.exports = {
  type: 'object',
  properties: {
    servers: {
      type: 'array', // Array of all servers
      items: {
        type: 'object',
        properties: {
          servername: { type: 'string' },
          serverid: { type: 'string' },
          servericon: { type: 'string' },
        },
      },
    },
    issuerDid: {
      type: 'string',
      title: 'issuerDid',
    },
    holderDid: {
      type: 'string',
      title: 'holderDid',
    },
    signature: {
      type: 'string',
      title: 'signature',
    },
  },
  required: ['servers'],
}
