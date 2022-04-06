const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Landing page'))

router.get('/posts', controllers.getAllPosts)

router.get('/posts/:id', controllers.getPostById)

// router.post('/posts/:id', controllers.createComment)

router.post('/posts/:id', controllers.postComment)

module.exports = router 