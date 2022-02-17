
export const discordApi = async (identifiers) => {
  return fetch(`/api/discord/redirect?did=${identifiers}`, {
    method: "GET",
    mode: "no-cors",
    redirect: "follow",
  })
}
