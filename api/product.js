const express = require("express");
const router = express.Router();
app.set('views', path.join(__dirname, 'views'));
router.get("/", async (req, res) => {
  res.render("hello.ejs")
});

module.exports = router;
