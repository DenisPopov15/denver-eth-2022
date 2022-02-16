import { sourcecredApi } from "../../_api/sourcecred"
export const sourcecredConnector = async (
  identifiers = "dmfilipenko,Dmytro-Filipenko"
) => {
  return await sourcecredApi(identifiers)
}
