// 链接数据库
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/blog',)
    .then(()=>console.log(`数据库链接成功`))
    .catch((err)=>{
        console.log(err);
    })