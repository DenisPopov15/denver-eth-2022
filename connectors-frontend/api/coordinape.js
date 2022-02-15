const coordinateAPI = process.env.NEXT_PUBLIC_COORDINAPE_CONNECTOR_API_ENDPOINT
export const coordinapeApi = async ({ signature, address, data, hash }) => {
  console.log({ signature, address, data, hash })
  return fetch(`${coordinateAPI}/pullCoordinapeData`, {
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
