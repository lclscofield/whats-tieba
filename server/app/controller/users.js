'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  username: 'string',
  password: 'string',
};

class UsersController extends Controller {
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
}

module.exports = UsersController;
