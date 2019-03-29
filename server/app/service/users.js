'use strict';

const Service = require('egg').Service;
const Identicon = require('identicon.js');
const crypto = require('crypto');

class UserService extends Service {
  // 注册用户
  async create(params) {
    const { ctx } = this;

    // 验证是否重名
    await this.validateName(params.username);

    // 生成用户唯一 id, 使用 mongo 自动生成的 _id
    const user = new ctx.model.User(params);
    user.userId = user._id;

    // 密码加盐
    const salt = this.getSalt();
    user.salt = salt;
    user.password = this.getHash(user.password + ':' + salt);

    // 根据用户唯一 id 生成哈希头像
    const imgData = new Identicon(this.getHash(user.userId)).toString();
    user.userImgUrl = 'data:image/png;base64,' + imgData; // 这就是头像的base64码

    // 入库
    user.save();
    return user.userId;
  }
  // 登录
  async login(params) {
    const { ctx } = this;
    const conditions = [{ username: params.account }, { phone: params.account }, { email: params.account }];
    const user = await ctx.model.User.findOne({ $or: conditions });
    // 验证用户是否存在
    if (!user) {
      ctx.throw(401, {
        type: 'json',
        message: '账号不存在',
      });
    }
    // 验证密码
    const hash = this.getHash(params.password + ':' + user.salt);
    if (hash !== user.password) {
      ctx.throw(401, {
        type: 'json',
        message: '密码错误',
      });
    }
    return user;
  }
  // 验证是否重名
  async validateName(name) {
    const { ctx } = this;
    const doc = await ctx.model.User.findOne({ username: name });
    if (doc) {
      ctx.throw(422, {
        type: 'json',
        message: '用户名重复',
      });
    }
  }
  // 生成哈希值
  getHash(str) {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
  }
  // 生成随机盐
  getSalt() {
    return Math.random()
      .toString()
      .slice(2, 7);
  }
}

module.exports = UserService;
