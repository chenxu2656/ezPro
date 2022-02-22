const { string } = require('joi');
const mongoose = require('mongoose');
// 创建文章集合规则

const articleSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true,'请填写文章标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now()
    },
    coverImg: {
        type: String,
        default: null
    },
    content: {
        type: String,
        default: null
    }
})
const Aritcle =  mongoose.model('Aritcle',articleSchema)

module.exports = {
    Aritcle
}