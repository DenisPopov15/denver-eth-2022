'use strict'

let { DISCORD_APP_CLIENT_ID } = process.env

const redirect = async(req, res) => {
  const { host, did } = req.query

  const clientId = DISCORD_APP_CLIENT_ID
  const scope = 'identify guilds'
  const state = '15773059ghq9183habn' // TODO: should be random and checked at the callback endpoint
  const encodedScope = encodeURIComponent(scope)

  const authorizationUrl = `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${clientId}&scope=${encodedScope}&state=${state}`
  const redirectUri = `https://${host}/api/discordCallback?did=${encodeURIComponent(did)}`

  const encodedRedirectUri = encodeURIComponent(redirectUri)
  const finalAuthorizationUrl = `${authorizationUrl}&redirect_uri=${encodedRedirectUri}&prompt=consent`

  res.status(302)
  res.redirect(finalAuthorizationUrl)
}

module.exports = redirect
