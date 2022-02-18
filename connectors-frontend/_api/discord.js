
export const discordApi = async (identifiers, encrypt) => {
  return fetch(`/api/discord/redirect?did=${identifiers}&encrypt=${encrypt}`, {
    method: "GET",
    mode: "no-cors",
    redirect: "follow",
  })
}
