const {Router} = require('express')
const { getPosts, addPost, deletePost } = require('../controllers/posts')
const router = Router()

 
router.get('/', getPosts)
router.post('/', addPost)
router.delete('/:id', deletePost)

module.exports= router