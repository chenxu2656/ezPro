const loginJudge = (req,res,next)=>{
    // 判断用户访问的是否是登陆页面, 2 判断当前状态, true：放行  否则 重定向到登陆
    if(req.url !='/login' && !req.session.username) {
      res.redirect('/admin/login')
    } else {
      next()
    }
}
module.exports = loginJudge