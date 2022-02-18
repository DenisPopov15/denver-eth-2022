export const sourcecredApi = async (identifiers, did, encrypt) => {
  return fetch(
    `/api/sourcecred?identifiers=${identifiers}&did=${did}&encrypt=${encrypt}`,
    {
      method: "GET",
    }
  )
}
