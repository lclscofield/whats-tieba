'use strict';

// 用户数据库
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      userId: String,
      username: String,
      password: String,
      salt: String,
      userImgUrl: String,
      phone: {
        type: String,
        default: '',
      },
      email: {
        type: String,
        default: '',
      },
      tiebas: Array,
    },
    { timestamps: true }
  );
  return mongoose.model('User', UserSchema);
};
