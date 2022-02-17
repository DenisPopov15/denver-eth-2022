export const sourcecredApi = async (identifiers) => {
  return fetch(
    `/api/sourcecred?identifiers=${identifiers}`,
    {
      method: "GET",
    }
  )
}
