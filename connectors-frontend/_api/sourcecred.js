export const sourcecredApi = async (identifiers, did, digest, signature, encrypt) => {
  return fetch(
    `/api/sourcecred?identifiers=${identifiers}&did=${did}&digest=${digest}&signature=${signature}&encrypt=${encrypt}`,
    {
      method: "GET",
    }
  )
}
