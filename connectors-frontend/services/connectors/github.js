import { githubApi } from "../../_api/github"
export const githubConnector = async ({
  host = "http://localhost:4001/api",
  did,
}) => {
  return await githubApi({ host, did })
}
