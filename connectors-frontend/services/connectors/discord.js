import { discordApi } from "../../api/discord"
export const discordConnector = async ({
  host = "http://localhost:4001/api",
  did,
}) => {
  return await discordApi({ host, did })
}
