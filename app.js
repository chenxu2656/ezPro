const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const session = require('express-session')
// 初始化数据库连接
require('./model/connect')
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const req = require('express/lib/request');
const { nextTick } = require('process');
// const usersRouter = require('./routes/users');
// const signInRouter = require('./routes/signIn');
// const signUpRouter = require('./routes/signUp');
var app = express();

//拦截并处理所有 post,会把请求到的body 放到 req 的 res.body 下面
app.use(bodyParser.urlencoded({extended: false}))
// 拦截所有方法 用 session处理
app.use(session({secret: 'secret key'}))
app.engine('art', require('express-art-template'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//拦截请求 判断用户登陆状态
app.use('/admin',require('./middleWare/login'))

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/signin', signInRouter);
// app.use('/signup', signUpRouter);
app.use('/admin', adminRouter);


module.exports = app;
