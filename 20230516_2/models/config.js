const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
  user: "root",
  password: "q1w2e3R$",
  database: "test4",
  multipleStatements: false,
});

module.exports = mysql;
