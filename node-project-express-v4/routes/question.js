var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ask?', function(req, res, next) {
  let { q } = req.query;
  console.log("req.query: ", req.query);
  res.send(`${q}`);
});

module.exports = router;