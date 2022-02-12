import * as ethers from "ethers"
console.log("")
const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
let utcTimeNow = () => {
  return new Date(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate(),
    new Date().getUTCHours(),
    new Date().getUTCMinutes(), 
    new Date().getUTCSeconds()
  ).getTime(); 
}
provider.send("eth_requestAccounts", []).then(async (addr) => {
  const signer = provider.getSigner()
  let now = Math.floor(Date.now() / 1000)
  const address = await signer.getAddress()
  const dataSign = `Login to Coordinape ${now}`
  const signature = await signer.signMessage(dataSign)
  let token = await fetch("https://api.coordinape.com/api/v2/login", {
    headers: {
      "accept": "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      signature,
      hash: '',
      data: dataSign,
      address: address,
      
    }),
    "method": "POST",
  "mode": "cors",
  "credentials": "omit"
  }).then(resp => resp.json())
  console.log(token.token)
  let data = await fetch("https://api.coordinape.com/api/v2/manifest", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "authorization": `Bearer ${token.token}`,
      
    },
    
    "method": "GET",
    "mode": "cors",
    
  }).then(resp => resp.json());
  console.log(data)
})
