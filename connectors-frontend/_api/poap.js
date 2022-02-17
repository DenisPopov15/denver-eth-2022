export const poapApi = async ({ signature, address, digest }) => {
  return fetch(`/api/poaps`, {
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
