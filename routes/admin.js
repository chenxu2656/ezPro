const express = require('express');
const router = express.Router();
router.get('/login', require('./admin/getLogin')); //加载用户登陆页面
router.post('/login', require('./admin/postLogin'));  //用户登陆
router.get('/user',require('./admin/user'))  //用户列表页
router.get('/logout',require('./admin/logout'))  //退出登陆
router.get('/edituser',require('./admin/edituser'))  // 用户编辑页面
router.post('/adduser',require('./admin/createuser'))  //创建用户
router.post('/editUser',require('./admin/edituserInfo'))  //创建用户
router.get('/articlelist',require('./admin/articleList'))  //文章列表页
router.get('/createarticle',require('./admin/createArticle'))  //文章列表页
router.post('/articleadd',require('./admin/articleadd'))
module.exports = router;
