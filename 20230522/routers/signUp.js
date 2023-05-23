const router = require("express").Router();
const { signUp } = require("../controllers/signUpControllers");

router.get("/", (req, res) => {
  res.render("signUp");
});

router.post("/", signUp);
module.exports = router;
