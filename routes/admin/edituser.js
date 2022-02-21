module.exports = function(req, res, next) {
    const {message} = req.query;
    res.render('admin/user-edit.art',{title: "更简单的实验设计系统",message: message});
}