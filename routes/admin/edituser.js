const {User} = require('../../model/user');
module.exports = async function(req, res, next) {
    const {message,id} = req.query;
    //获取到地址栏的id参数
    if(id) {
        //当前是修改操作
        let user = await User.findOne({_id:id})
        return res.render('admin/user-edit.art',{
            message: message,
            user: user,
            link: `/admin/edituser?id=${id}`,
            button: "Update"
        });
    }
    return res.render('admin/user-edit.art',{
        message: message,
        link: '/admin/adduser',
        button: "Create"
    });
}