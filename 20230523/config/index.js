const dot = require("dotenv").config();

const dev = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  databse: process.env.DATABASE3,
  host: process.env.HOST,
  dialect: "mysql",
};

module.exports = dev;
