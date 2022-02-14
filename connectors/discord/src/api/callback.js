'use strict'

const discordService = require('../services/discordService')

const callback = async(req, res) => {
  const { code, did } = req.query

  // const discordService = await discordService.initialize(code)
  // const userData  = await discordService.getUserData()
  // const userRepos = await discordService.getUserChannels()

  // const userVCData = {
  //   id: userData.id,
  //   login: userData.login,
  //   name: userData.name,
  //   url: userData.url,
  //   email: userData.email,
  //   followers: userData.followers,
  //   following: userData.following,
  //   twitterUsername: userData.twitter_username,
  //   holderDid: did,
  // }

  // const reposVCData = userRepos.map((currRepo) => ({
  //   id: currRepo.id,
  //   fullName: currRepo.full_name,
  //   ownerLogin: currRepo.owner.login,
  //   url: currRepo.url,
  //   forksCount: currRepo.forks_count,
  //   stargazersCount: currRepo.stargazers_count,
  //   watchersCount: currRepo.watchers_count,
  //   holderDid: did,
  // }))

  const userVCData = { 'dummyUserData': true }
  const reposVCData = [{ 'dummRepoData': true }]

  res.status(200).json({ userVCData, reposVCData })
}

module.exports = callback