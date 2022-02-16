'use strict'

const { VERCEL_URL } = process.env

module.exports = `https://${VERCEL_URL}/api/discord/callback`
