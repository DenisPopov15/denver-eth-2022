import { ethers } from "ethers"

export const getProvider = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  return provider
}

export const requestAccounts = async (provider) => {
  return await provider.send("eth_requestAccounts", [])
}

