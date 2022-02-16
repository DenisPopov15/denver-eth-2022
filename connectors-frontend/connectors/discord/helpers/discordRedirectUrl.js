'use strict'

const { VERCEL_URL } = process.env

module.exports = `${VERCEL_URL}/api/discord/callback`
