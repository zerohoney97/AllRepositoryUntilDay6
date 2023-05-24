const postControllers = require("../controllers/postsController");
const { Post } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  const data = postControllers.getUserPost(req, res);
  console.log(data);
});

module.exports = router;
