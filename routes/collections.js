const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("Collection Route");
});

//update username
router.put("/:id", async (req, res) => {
  //Verify user ID
  if (req.body.userId == req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update your own Account");
  }
});

//delete username
//follow username
//unfollow user

module.exports = router;
