const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
  user: "root",
  password: "q1w2e3R$",
  database: "toy_board",
  multipleStatements: true,
});

module.exports = { mysql };
