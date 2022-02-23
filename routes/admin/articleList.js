const {Aritcle} = require('../../model/article');
module.exports = async (req,res)=>{
    const articleList = await Aritcle.find()
    return res.send(articleList)
    // res.render('admin/article.art') 
}
