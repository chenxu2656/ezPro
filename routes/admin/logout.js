module.exports = (req,res)=>{
    req.session.destory(()=>{
        res.clearCookie('connect.sid');
        res.rediect('/admin/login')
    })
}