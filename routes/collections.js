const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Collection Route");
});

module.exports = router;
