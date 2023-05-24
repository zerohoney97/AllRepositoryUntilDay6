const {
  databse,
  dialect,
  host,
  password,
  username,
} = require("../config/index");
const Sequelize = require("sequelize");
const User = require("./users");
const Comment = require("./comments");
const Grade = require("./grade");
const Post = require("./posts");
// const bcrypt=require('bcrypt');

const sequelize = new Sequelize(databse, username, password, {
  host,
  dialect,
});

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Grade = Grade;
db.Comment = Comment;

User.init(sequelize)
Post.init(sequelize)
Comment.init(sequelize)
Grade.init(sequelize)


User.associate(db)
Post.associate(db)
Comment.associate(db)

console.log("연결 성공 sequilze");
module.exports = db;
