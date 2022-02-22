const formidable = require('formidable')
const path = require('path')
module.exports = (req,res,next)=>{
    //1. 创建表单解析对象
    const form = new formidable.IncomingForm()
    // 2. 配置文件上传路径
    form.uploadDir = path.join(__dirname,'../','../','public','uploads')
    // 3. 上传的文件保留文件后缀,默认不保留
    form.keepExtensions = true
    // 4. 限制文件大小
    form.maxFileSize = 1
    // 4. 解析表单
    form.parse(req,(err,fields,files)=>{
        //fields    保存的正常的数据 除了二进制文件之外的
        //files 保存二进制文件
        if(err)
            return res.send(err)
        res.send(files);
    })
}
