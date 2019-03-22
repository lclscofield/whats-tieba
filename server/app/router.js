'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/initCsrf', controller.home.initCsrf);
  router.post('/api/query', controller.home.index);
};
