//用户集合构造函数
const {User} = require('../../model/user');
module.exports = async function(req, res, next) {
    let {username,email,role,state} = req.body
    let {id} = req.query
    await User.findOneAndUpdate({_id: id},{
        username: username,
        email: email,
        role: role,
        state: state
    })
    return res.redirect('/admin/user')
}