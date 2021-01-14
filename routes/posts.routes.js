import { Router } from 'express'
import postsController from '../controllers/posts.controller.js'

const router = new Router()

router.post('/posts', postsController.createPost)
router.get('/posts', postsController.getAllPosts)
router.get('/posts/:id', postsController.getUserPosts)

export default router
