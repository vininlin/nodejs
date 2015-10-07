var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.header("Content-Type", "application/html; charset=utf-8");
  res.render('index', { title: 'Express' });
});

module.exports = router;
