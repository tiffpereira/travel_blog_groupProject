const { model } = require('mongoose')
const PostSchema = require('./posts')
const CommentSchema = require('./comments')

const Posts = model('Post', PostSchema )
const Comments = model('Comment', CommentSchema)

module.exports = {
    Posts, 
    Comments
}