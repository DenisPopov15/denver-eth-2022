let { GITHUB_APP_CLIENT_ID, HOST } = process.env

const redirect = async (req, res) => {
  const { did, signature, digest, encrypt } = req.query
  // TODO: Add auth/signature verification

  const clientId = GITHUB_APP_CLIENT_ID
  const scope = 'read:user'
  const encodedScope = encodeURIComponent(scope)

  const authorizationUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${encodedScope}`
  const redirectUri = `${HOST}/api/github/callback?did=${encodeURIComponent(
    did
  )}`

  const encodedRedirectUri = encodeURIComponent(redirectUri)
  const url = `${authorizationUrl}&redirect_uri=${encodedRedirectUri}`

  res.status(200).json({ url })
}

module.exports = redirect
