import { getProvider, requestAccounts } from "../provider"
import { poapApi } from "../../_api/poap"
export const poapConnector = async () => {
  const provider = await getProvider()
  await requestAccounts(provider)
  const signer = provider.getSigner()

  const address = await signer.getAddress()

  const digest = `Login to Poap`
  const signature = await signer.signMessage(digest)
  const result = await poapApi({
    address,
    signature,
    digest,
  })
  console.log(result)
}
