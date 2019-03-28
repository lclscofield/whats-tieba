'use strict';

// 贴吧数据库
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      tiebaId: String,
      tiebaName: String,
      tiebaImgUrl: String,
      tiebaDesc: String,
      admin: Array,
    },
    { timestamps: true }
  );
  return mongoose.model('Tiebas', UserSchema);
};
