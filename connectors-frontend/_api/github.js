export const githubApi = async (identifiers, encrypt) => {
  return fetch(`/api/github/redirect?did=${identifiers}&encrypt=${encrypt}`, {
    method: "GET",
  })
}
