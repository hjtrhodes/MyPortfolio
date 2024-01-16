/**
* @type {import('next').NextConfig}
*/
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}