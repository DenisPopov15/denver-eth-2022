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
