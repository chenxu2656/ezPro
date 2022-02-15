var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade',{title: "更简单的实验设计系统"});
});

module.exports = router;
