const githubAPIUrl = process.env.NEXT_PUBLIC_GITHUB_CONNECTOR_API_ENDPOINT
export const discordApi = async (identifiers) => {
  return fetch(`${githubAPIUrl}/githubRedirect?did=${identifiers}`, {
    method: "GET",
  })
}
