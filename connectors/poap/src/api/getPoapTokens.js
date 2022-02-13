'use strict'


const getPoapTokens = async (req, res) => {
  
  
  res.status(200).json({ tokenURI })
  try {
    
    if (verifiedAddress !== address) {
      throw new Error('Invalid signature')
    }
    res.status(200).json({ address })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getPoapTokens
