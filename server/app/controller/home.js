'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async initCsrf() {
    const { ctx } = this;
    console.log('initCsrf');
    ctx.status = 200;
    ctx.cookies.set('xxx', 'hehe');
    ctx.body = {
      data: null,
      error: false,
      errorCode: 0,
      success: true,
    };
  }

  async index() {
    const { ctx } = this;
    const csrfToken = ctx.cookies.get('csrfToken');
    console.log(456, csrfToken);
    ctx.status = 200;
    ctx.body = {
      hehe: 'shabi',
    };
  }
}

module.exports = HomeController;
