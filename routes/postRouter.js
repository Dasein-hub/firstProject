const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('*', authMiddleware.checkUser)
router.get('/', postController.indexGet)
router.post('/login', authController.indexLogInPost)
router.post('/signin', authController.indexSignInPost)
router.get('/logout', authController.logout)
router.get('/profile', authMiddleware.requireAuth, postController.profileGet)
router.post('/profile', authMiddleware.requireAuth, postController.profilePost)
router.get('/singlePost/:id', authMiddleware.requireAuth, postController.singlePostGet)
router.post('/singlePost/:id', authMiddleware.requireAuth, postController.singlePostPost)

module.exports = router;