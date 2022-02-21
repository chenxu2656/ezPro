const bcrypt = require('bcrypt');
const Joi = require('joi');

//用户集合构造函数
const {User,createUser,validUser,userExist} = require('../../model/user');
module.exports = async function(req, res, next) {
    //接收请求参数
    let userInput = req.body
    let {username,email,password,role,state} = userInput
    // 用户格式检测
    try{
        await validUser(userInput)
    }catch (err) {
        //调用next方法,next只接收字符串 将对象转换成字符串
        const redirectPath = JSON.stringify({
            path: '/admin/edituser',
            message: err.message
        })
        //处罚错误处理中间件
        return next (redirectPath)
    }
    // 查询用户是否存在
    let user = await userExist(email)
    if (user) {
        const redirectPath = JSON.stringify({
            path: '/admin/edituser',
            message: '邮箱已存在'
        })
        //处罚错误处理中间件
        return next (redirectPath) 
    }else {
        // 向数据库写入用户
        createUser(username,email,password,role,state)
        //重定向到用户列表页
        res.redirect('/admin/user')
    }
    // //如果查询到了,是一个对象，如果没查询到，是空
}