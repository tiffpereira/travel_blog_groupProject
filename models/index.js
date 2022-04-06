const { model } = require('mongoose')
const PostSchema = require('./posts')
const CommentSchema = require('./comments')

const Post = model('post', PostSchema )
const Comment = model('comment', CommentSchema)

module.exports = {
    Post, 
    Comment,
}