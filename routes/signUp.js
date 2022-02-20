const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('signUp.jade',{title: "更简单的实验设计系统"});
  });
module.exports = router;