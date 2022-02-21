// 创建用户集合
// - 用户名
// - 邮箱
// - 密码
// - 角色
// - 状态
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        minlength: 6,
        maxlength: 16
    },
    email:{
        type: String,
        unique: true,   //保证邮箱唯一
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    state: {
        type: Number,
        default: 0   //0 启用 ，1 禁用
    }
});

//使用规则创建集合,返回集合构造函数
const User = mongoose.model('User',userSchema);
let createUser = async (username,email,pw,role,state)=>{
    const salt = await bcrypt.genSalt(11);
    const pwresult = await bcrypt.hash(pw,salt)
    let transRole = role == '普通用户' ? 'user' : 'admin' 
    let transState = state == '启用' ? '0' : '1' 
    const user = await User.create({
        username: username,
        email: email,
        password: pwresult,
        role: transRole,
        state: transState
    })
}
// let createUserNew = async (username,email,pw,role,state)=>{
//     const salt = await bcrypt.genSalt(11);
//     const pwresult = await bcrypt.hash(pw,salt)
//     let transRole = role == '普通用户' ? 'user' : 'admin' 
//     let transState = state == '启用' ? '0' : '1' 
//     const user = await User.create({
//         username: username,
//         email: email,
//         password: pwresult,
//         role: transRole,
//         state: transState
//     })
// }
// createUserNew('xuchen','chenxu2656@gmail.com','123456','admin','启用')
// 初始化的时候创建用户
// createUser()
module.exports = {
    User: User,
    createUser: createUser
}