export const  githubAPIUrl = `${process.env.NEXT_PUBLIC_GITHUB_CONNECTOR_API_ENDPOINT}/githubRedirect`

export const discordApi = async (identifiers) => {
  return fetch(`${githubAPIUrl}?did=${identifiers}`, {
    method: "GET",
  })
}
