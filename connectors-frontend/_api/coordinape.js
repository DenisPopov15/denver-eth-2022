export const coordinapeApi = async ({ signature, address, data, hash }) => {
  return fetch(`/api/coordinape`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      signature,
      address,
      data,
      hash,
    }),
  })
}
