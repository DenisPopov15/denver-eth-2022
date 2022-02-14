module.exports = {
  id: 'coordinape',
  type: 'object',
  properties: {
    date: {
      type: 'string',
      format: 'date-time',
      title: 'date', // Issuance date
      maxLength: 30,
    },
    circle: {
      type: 'string',
      title: 'circle', // Name of CoordinApe Circle
    },
    skills: {
      type: 'array',
      title: 'skills', // Array of skills
    },
    givesReceived: {
      type: 'number',
      title: 'givesRecieved', // Total number of Gives received last epoch
    },
    notes: {
      type: 'array',
      title: 'notes', // Array of all notes received by user during last epoch
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
  required: ['givesReceived', 'notes', 'skills', 'circle', 'date'],
}
