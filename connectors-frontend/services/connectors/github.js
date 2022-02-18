export const githubApi = async (identifiers, encrypt) => {
  return fetch(`/api/github/redirect?did=${identifiers}&encrypt=${encrypt}`, {
    method: "GET",
  })
}

export const githubConnector = async ({
  host = "http://localhost:4001/api",
  did,
}) => {
  return await githubApi({ host, did })
}
