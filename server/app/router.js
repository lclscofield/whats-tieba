'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('users', '/api/users', controller.users);
  router.get('login', '/api/users/login', controller.users.login);
};
