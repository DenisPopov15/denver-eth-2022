'use strict'

const GithubService = require('../services/githubService')

const callback = async(req, res) => {
  const { code, did } = req.query

  // const githubService = await GithubService.initialize(code)
  // const userData  = await githubAdapter.getUserData()
  // const userRepos = await githubAdapter.getUserRepos()

  // const userVCData = {
  //   id: userData.id,
  //   login: userData.login,
  //   name: userData.name,
  //   url: userData.url,
  //   email: userData.email,
  //   followers: userData.followers,
  //   following: userData.following,
  //   twitterUsername: userData.twitter_username,
  // }

  // const reposVCData = userRepos.map((currRepo) => ({
  //   id: currRepo.id,
  //   fullName: currRepo.full_name,
  //   ownerLogin: currRepo.owner.login,
  //   url: currRepo.url,
  //   forksCount: currRepo.forks_count,
  //   stargazersCount: currRepo.stargazers_count,
  //   watchersCount: currRepo.watchers_count,
  // }))

  const userVCData = { 'dummyUserData': true }
  const reposVCData = [{ 'dummRepoData': true }]

  res.status(200).json({ userVCData, reposVCData })
}

module.exports = callback