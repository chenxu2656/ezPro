const {Aritcle} = require('../../model/article');
module.exports = async (req,res)=>{
    let page = req.query.page?req.query.page:1
    let pageSize = 10
    let startIndex = (page-1)*pageSize
    let blogCount = await Aritcle.countDocuments({})
    let totalPage = Math.ceil(blogCount/pageSize)
    const articleList = await Aritcle.find({}).sort({'_id':-1}).limit(pageSize).skip(startIndex)
    // 给文章列表分页
    console.log(articleList);
    res.render('home/default.art',{
        articleList: articleList,
        page: page,
        totalPage: totalPage,
        blogCount: blogCount
    }) 
}
