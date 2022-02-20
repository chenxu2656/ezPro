const bcrypt = require('bcrypt')
//用户集合构造函数
const {User,createUser} = require('../../model/user');
module.exports = async function(req, res, next) {
    //接收请求参数
    let userInput = req.body
    let {username,email,password,role,state} = userInput
    // res.render('admin/err.art',{err: req.body})
    if (email.trim().length == 0 || password.trim().length == 0 || username.trim().length == 0) {
        return res.status(400).render('admin/err.art',{err: "cuole"})
    }
    // 查询用户信息,
    let user = await User.findOne({email: email})
    if (user) {
        res.render('admin/user-edit.art',{err: '用户已存在'})
        return
        //如果有用户说明邮箱已经被使用了
    }else {
        // 向数据库写入用户
        createUser(username,email,password,role,state)
        res.redirect('/admin/user')
    }
    // //如果查询到了,是一个对象，如果没查询到，是空
}