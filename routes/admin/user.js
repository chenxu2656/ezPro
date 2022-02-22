const {User} = require('../../model/user');
module.exports = async (req,res)=>{
    // 查询用户信息
    let page = req.query.page?req.query.page:1
    let pageSize = 10
    // 查询用户总数
    let count = await User.countDocuments({})
    let totalPage = Math.ceil(count/pageSize)
    let start = (page - 1) * pageSize
    let users = await User.find({}).limit(pageSize).skip(start)
    res.render('admin/user.art',{
        users: users,
        page: page,
        totalPage: totalPage
    }) 
}
