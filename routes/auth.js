const router = require("express").Router();
const User = require("../models/User");

//Register
router.post("/register", async (req, res) => {
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    passowrd: req.body.passowrd,
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
