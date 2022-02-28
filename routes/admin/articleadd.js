const formidable = require('formidable')
const path = require('path')
const {createArticle} = require('../../model/article');
module.exports = (req,res)=>{
    //1. 创建表单解析对象
    const uploadDir = path.join(__dirname,'../','../','public','uploads')
    let fileOption = {
        uploadDir: uploadDir,  //上传路径
        keepExtensions: true, // 展示拓展名
        maxFileSizeL: 2
    }
    const form = new formidable.IncomingForm(fileOption)
    form.parse(req,(err,fields,files)=>{
        if (err)
            return res.send(err)
        let fileName = files.coverImg.filepath.split('public')[1]
        fields.coverImg = fileName
        if (!fields.publishDate)
            delete fields.publishDate
        const ca = createArticle(fields)
        return res.redirect('/admin/articlelist')
    })
}
