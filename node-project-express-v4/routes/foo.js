var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let condition = Math.floor(Math.random() * 10);
    console.log("condition: ", condition);
    if(condition > 5) {
        res.send("sometimes this");
        // next();
    } else {
        res.send("and sometimes that");
        // next();
    }
});

module.exports = router;
