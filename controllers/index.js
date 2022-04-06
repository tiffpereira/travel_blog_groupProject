const { Post } = require('../models/index')
const { Comment } = require('../models/index')

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// const createComment = async (req,res) => {
//     try {
//         const comment = await new Comments(req.body)
//         await comment.save()
//         return res.status(201).json({comment,
//         });
//     } catch (error) {
//         return res.status(500).json({ error: error.message })
//     }
// }

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('comments')
        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    } 
}

const postComment = async (req, res) => {
    try {
        const newComment = await new Comment(req.body)
        await newComment.save()
    
        const post = await Post.findById(req.params.id)
        post.comments.push(newComment._id)
        await post.save()
    
        return res.status(201).json(newComment)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
}

module.exports = {
    getAllPosts,
    // createComment,
    getPostById,
    postComment
}