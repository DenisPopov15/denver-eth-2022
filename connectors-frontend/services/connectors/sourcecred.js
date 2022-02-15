import { sourcecredApi } from "../../api/sourcecred"
export const sourcecredConnector = async (
  identifiers = "dmfilipenko,Dmytro-Filipenko"
) => {
  return await sourcecredApi(identifiers)
}
