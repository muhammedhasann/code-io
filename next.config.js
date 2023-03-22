
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${github.com/muhammedhasann/code-io}/`;
  basePath = `/${github.com/muhammedhasann/code-io}`;
}

module.exports = {
  assetPrefix: assetPrefix',
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
};
