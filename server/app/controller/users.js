'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  username: 'string',
  password: 'string',
};
const loginRule = {
  account: 'string',
  password: 'string',
  rememberMe: 'boolean',
};

class UsersController extends Controller {
  // 用户注册
  async create() {
    const { ctx } = this;
    const params = ctx.request.body;

    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, params);

    // 调用 service 创建一个 user
    const userId = await ctx.service.users.create(params);

    // 设置响应体和状态码
    ctx.body = { userId };
    ctx.status = 201;
  }
  // 用户登录
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    ctx.validate(loginRule, params);
    const user = await ctx.service.users.login(params);
    console.log(
      ctx.cookies.get('EGG_SESS', {
        encrypt: true,
        signed: false,
      }),
      ctx.session
    );
    // 设置 Session
    ctx.session[user.userId] = user.userId;
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    if (params.rememberMe) ctx.session.maxAge = 30 * 24 * 3600 * 1000;
    ctx.body = user;
    ctx.status = 200;
  }
}

module.exports = UsersController;
