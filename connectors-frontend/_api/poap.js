const poapAPIUrl = process.env.NEXT_PUBLIC_POAP_CONNECTOR_API_ENDPOINT
export const poapApi = async ({ signature, address, digest }) => {
  return fetch(`${poapAPIUrl}/getPoapTokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      signature,
      address,
      digest
    }),
  })
}
