export const discordApi = async (identifiers) => {
  return fetch(`/api/github/redirect?did=${identifiers}`, {
    method: "GET",
  })
}
