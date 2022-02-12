'use strict'

const { OAuthApp, Octokit } = require('octokit')
let { GITHUB_APP_CLIENT_ID, GITHUB_APP_CLIENT_SECRET } = process.env

class GithubService {
  constructor(octokit) {
    this.octokit = octokit
  }

  static async initialize(code) {
    const app = new OAuthApp({
      clientType:   'oauth-app',
      clientId:     GITHUB_APP_CLIENT_ID,
      clientSecret: GITHUB_APP_CLIENT_SECRET,
    })
    const octokit = await app.getUserOctokit({ code })

    return new GithubAdapter(octokit)
  }

  async getUserData() {
    const response = await this.octokit.rest.users.getAuthenticated()
    if (response.status !== 200) {
      throw new Error(JSON.stringify(response))
    }
    return response.data
  }

  async getUserRepos() {
    const response = await this.octokit.rest.repos.listForAuthenticatedUser()
    if (response.status !== 200) {
      throw new Error(JSON.stringify(response))
    }
    return response.data
  }
}

module.exports = GithubService