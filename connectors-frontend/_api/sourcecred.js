export const sourcecredApi = async (identifiers) => {
  return fetch(
    `/api/sourcred?identifiers=${identifiers}`,
    {
      method: "GET",
    }
  )
}
