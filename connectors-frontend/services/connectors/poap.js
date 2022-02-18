import { getProvider, requestAccounts } from "../provider"
export const poapApi = async ({ signature, address, digest, encrypt }) => {
  return fetch(`/api/poap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      signature,
      address,
      digest,
      encrypt
    }),
  })
}

export const poapConnector = async (encrypt = false) => {
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
    encrypt
  })
  console.log(result)
}
