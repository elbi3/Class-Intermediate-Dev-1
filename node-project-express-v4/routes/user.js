var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name?', function(req, res, next) {
    const userName = req.params.name ? req.params.name : " random guest";
    console.log("req.params.name: ", req.params.name);
    res.send(`Hello user${userName}!`);
});

module.exports = router;

// this?
// app.get('/user:name?', (req, res) => {
//   res.send('User route matched');
// });

// or?
// app.get(/^\/user(name)?$/, (req, res) => {
//   res.send('User route matched via regex');
// });