// methods for accessing environment variables
// this is needed because many process.env values are no longer defined on the client side (looks to be
// security related).  To get the environment variable on client side can now use remote.process.env.

let isElectronEnv = false;
let processEnv = null;
let appObject = null;

try {
  const electron = require('electron');
  isElectronEnv = !!(electron && (electron.remote || electron.app));

  if (isElectronEnv) {
    const isRunningClientSide = electron.remote && !!window; // if we are a render process and we have a window
    // console.log(`env: isRunningClientSide = ${isRunningClientSide}`);
    processEnv = isRunningClientSide ? electron.remote.process.env : process.env;
    appObject = isRunningClientSide ? electron.remote.app : electron.app;
  }
} catch (e) { // fallback for unit testing this module
  console.warn(`env: electron module not loaded, falling back to unit test environment`);
  isElectronEnv = false;
}

if (!isElectronEnv) { // TRICKY: need this additional check for running unit tests in main app
  console.warn(`env: electron environment is not defined, falling back to unit test environment`);
  processEnv = process && process.env || {};
  appObject = {
    getPath: (path) => {
      switch (path) {
      case 'home':
        return '/Users/jest/mock/path';
      case 'appData':
        return '/Users/jest/mock/path/appData';
      default:
        return 'unknown';
      }
    },
  };
}

/**
 * get path to Home folder
 * @return {string}
 */
const home = () => (appObject.getPath('home'));

/**
 * get path to Home folder
 * @return {string}
 */
const data = () => (appObject.getPath('appData'));

/**
 * get Build number
 * @return {string}
 */
const getBuild = () => (processEnv.BUILD);

/**
 * return appropriate process.env data
 * @return {*}
 */
const getEnv = () => (processEnv);

/**
 * apply new env
 * @param env
 */
const setEnv = (env) => {
  processEnv = env;
};

/**
 * apply new app
 * @param app
 */
const setApp = (app) => {
  appObject = app;
};

const env = {
  data,
  getEnv,
  getBuild,
  home,
  setEnv,
  setApp,
};

module.exports = env;
