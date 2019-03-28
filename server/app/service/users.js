'use strict';

const Service = require('egg').Service;
const Identicon = require('identicon.js');
const crypto = require('crypto');

class UserService extends Service {
  async create(params) {
    const { ctx } = this;

    // 验证是否重名
    await this.validateName(params.username);

    // 生成用户唯一 id, 使用 mongo 自动生成的 _id
    const user = new ctx.model.User(params);
    user.userId = user._id;

    // 根据用户唯一 id 生成哈希头像
    const hash = crypto.createHash('md5');
    hash.update(user.userId); // 传入用户名
    const imgData = new Identicon(hash.digest('hex')).toString();
    user.userImgUrl = 'data:image/png;base64,' + imgData; // 这就是头像的base64码

    // 入库
    user.save();
    return user.userId;
  }
  // 验证是否重名
  async validateName(name) {
    const { ctx } = this;
    const doc = await ctx.model.User.findOne({ username: name });
    if (doc) {
      ctx.throw(403, {
        type: 'json',
        message: '用户名重复',
      });
    }
  }
}

module.exports = UserService;
