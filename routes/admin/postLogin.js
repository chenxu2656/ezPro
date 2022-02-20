const bcrypt = require('bcrypt')
//用户集合构造函数
const {User} = require('../../model/user');
module.exports = async function(req, res, next) {
    //接收请求参数
    
    const {email,password} = req.body
    console.log(`email" ${email}`);
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/err.art',{err: "cuole"})
    }
    // 查询用户信息,
    let user = await User.findOne({email: email})
    if (user) {
        //进行用户匹配 , 密码匹配 如果 传入明文 和 获得的密码
        let isequal = await bcrypt.compare(password,user.password)
        if (isequal) {
            // 调用 session 对象存储，生成一个 session id 并且存储到客户端的cookie
            req.session.username = user.username;
            req.app.locals.userInfo = user
            // 重定向 ， 成功之后 重定向到 用户列表页面
            res.redirect('/admin/user')
        }else {
            res.render('admin/err.art',{err: `邮箱或者密码错误`})
        }
    }else {
        res.render('admin/err.art',{err: `用户不存在`})
    }
    //如果查询到了,是一个对象，如果没查询到，是空
}