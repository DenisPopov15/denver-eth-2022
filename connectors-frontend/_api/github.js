export const githubApi = async (identifiers) => {
  return fetch(`/api/github/redirect?did=${identifiers}`, {
    method: "GET",
  })
}
