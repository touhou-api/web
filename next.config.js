const path = require("path");

const rootDir = path.resolve(__dirname);
const srcDir = path.resolve(rootDir, "src");

module.exports = {
  env: {
    API_PATH: process.env.API_PATH,
  },
  webpack: (config) => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias["~"] = srcDir;
    config.resolve.alias["~~"] = rootDir;
    /* eslint-enable no-param-reassign */
    return config;
  },
};
