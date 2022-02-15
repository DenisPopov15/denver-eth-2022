import { getProvider, requestAccounts } from "../provider"
export const coordinapeConnector = async () => {
  const provider = await getProvider()
  const accounts = await requestAccounts(provider)
  const signer = provider.getSigner()
  let now = Math.floor(Date.now() / 1000)
  const address = await signer.getAddress()

  const dataSign = `Login to Coordinape ${now}`
  const signature = await signer.signMessage(dataSign)
  console.log(accounts, address)
}
