const express = require('express');
const router = express.Router();
router.get('/login', require('./admin/getLogin')); //加载用户登陆页面
router.post('/login', require('./admin/postLogin'));  //用户登陆
router.get('/user',require('./admin/user'))  //用户列表页
router.get('/logout',require('./admin/logout'))  //退出登陆
router.get('/edituser',require('./admin/edituser'))  //退出登陆
router.post('/edituser',require('./admin/createuser'))  //退出登陆
module.exports = router;
