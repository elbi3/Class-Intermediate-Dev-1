var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(/guy/, function(req, res, next) { //matches anything with "guy" in it
  console.log("req.params: ", req.params);
  res.send('User route matched via regex');
});

module.exports = router;

// app.get(/^\/user(name)?$/, (req, res) => {
//   res.send('User route matched via regex');
// });