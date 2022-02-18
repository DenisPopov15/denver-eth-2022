import { getProvider, requestAccounts } from '../provider'


export const discordApi = async ({ identifiers, encrypt }) => {
  const provider = await getProvider()
  await requestAccounts(provider)
  const signer = provider.getSigner()
  let now = Math.floor(Date.now() / 1000)
  const address = await signer.getAddress()
  // address, return_url, signature, digest, encrypt
  const dataSign = `Login to Discord ${now}`
  const signature = await signer.signMessage(dataSign)
  let params = new URLSearchParams({
    address,
    identifiers,
    encrypt,
    signature,
    digest: dataSign,
    return_url: window?.location?.href,
  })
  return fetch(`/api/discord/redirect?${params.toString()}`, {
    method: "GET",
    // mode: "no-cors",
    // redirect: "follow",
  }).then(res => res.json())
}

export const discordConnector = async ({ identifiers, encrypt }) => {
  return await discordApi({ identifiers, encrypt }).then(({ url }) => url)
}
