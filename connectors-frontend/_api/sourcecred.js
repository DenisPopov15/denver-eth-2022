const sourcecredAPIUrl =
  process.env.NEXT_PUBLIC_SOURCECRED_CONNECTOR_API_ENDPOINT
export const sourcecredApi = async (identifiers) => {
  return fetch(
    `${sourcecredAPIUrl}/pullSourceCredData?identifiers=${identifiers}`,
    {
      method: "GET",
    }
  )
}
