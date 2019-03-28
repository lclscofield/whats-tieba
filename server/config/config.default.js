/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553149665251_5073';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // add your user config here
  const userConfig = {
    security: {
      csrf: {
        ignoreJSON: true,
      },
    },
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1/tieba',
        options: {},
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
