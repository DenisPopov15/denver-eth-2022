'use strict'

const redirectUri = require('../helpers/discordRedirectUrl')
const { DISCORD_APP_CLIENT_ID } = process.env

const redirect = async (req, res) => {
  const { did, digest, signature, encrypt } = req.query
  // TODO: Check auth/signature, that its belong to it did/ethereum address

  const clientId = DISCORD_APP_CLIENT_ID
  const scope = 'identify guilds'
  const state = encodeURIComponent(did) // NOTE: kind of hack
  const responseType = 'code' // token
  const encodedScope = encodeURIComponent(scope)

  const authorizationUrl = `https://discord.com/api/oauth2/authorize?response_type=${responseType}&client_id=${clientId}&scope=${encodedScope}&state=${state}`

  const encodedRedirectUri = encodeURIComponent(redirectUri)
  const finalAuthorizationUrl = `${authorizationUrl}&redirect_uri=${encodedRedirectUri}&prompt=consent`

  res.status(302)
  res.redirect(finalAuthorizationUrl)
}

module.exports = redirect
