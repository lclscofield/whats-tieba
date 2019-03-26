'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async create() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      hehe: 'shabi',
    };
  }
}

module.exports = UsersController;
