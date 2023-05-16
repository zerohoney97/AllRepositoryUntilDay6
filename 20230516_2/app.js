const crypto = require("crypto");
const e = require("express");
const path = require("path");
const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");
const mysql2 = require("mysql2/promise");
const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(e.urlencoded({ extended: false }));

app.use("/join", joinRouter);
app.use("/login", loginRouter);
app.listen(8080, () => {
  console.log("성공했구나 이녀석..");
});