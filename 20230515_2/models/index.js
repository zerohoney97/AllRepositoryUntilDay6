const {
  uesrInit,
  userInsert,
  userList,
  userSelect,
  userDelete,
  userPasswordUpdate,
  userRefresh,
} = require("./usersModel");

// async function test() {
//   userDelete("aaa");
// }

// test();
module.exports = {
  userInsert,
  userList,
  userSelect,
  userDelete,
  userPasswordUpdate,
  userRefresh,
};
