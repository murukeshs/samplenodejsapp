var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    var viewpath=__dirname;
    viewpath=viewpath.replace("routes",'');
    viewpath=viewpath+"views"+'/index.html';
    console.log(viewpath);
    res.sendFile(viewpath);
});

module.exports = router;