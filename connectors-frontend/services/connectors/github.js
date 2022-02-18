import { getProvider, requestAccounts } from '../provider'

export const githubApi = async ({ identifiers, encrypt }) => {
  const provider = await getProvider()
  await requestAccounts(provider)
  const signer = provider.getSigner()
  let now = Math.floor(Date.now() / 1000)
  const address = await signer.getAddress()
  // address, return_url, signature, digest, encrypt
  const dataSign = `Login to Github ${now}`
  const signature = await signer.signMessage(dataSign)
  let params = new URLSearchParams({
    address,
    identifiers,
    encrypt,
    signature,
    digest: dataSign,
    return_url: window?.location?.href,
  })
  return fetch(`/api/github/redirect?${params.toString()}`, {
    method: "GET",
  }).then(res => res.json())
}

export const githubConnector = async ({ identifiers, encrypt }) => {
  return await githubApi({ identifiers, encrypt }).then(({ url }) => url)
}
