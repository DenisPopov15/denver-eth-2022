export const discordAPIUrl = `${process.env.NEXT_PUBLIC_DISCORD_CONNECTOR_API_ENDPOINT}/discordRedirect`

export const discordApi = async (identifiers) => {
  return fetch(`${discordAPIUrl}?did=${identifiers}`, {
    method: "GET",
    mode: "no-cors",
    redirect: "follow",
  })
}
