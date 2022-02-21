const {User} = require('../../model/user');
module.exports = async (req,res)=>{
    // 查询用户信息
    let users = await User.find({})
    res.send(users)
    res.render('admin/user.art') 
}
