const Post = require('../models/Post')
const Comment = require('../models/Comment')
const jwt = require('jsonwebtoken')
const { secret } = require('../secret')

module.exports.indexGet = async (req, res) => {
    await Post.find().sort({ createdAt: -1 }) 
              .then((result) => {
                res.render('index', { 
                    posts: result
                 })
              })
              .catch((err) => {
                  console.log(err)
              })
}

module.exports.profileGet = async (req, res) => {
    jwt.verify(req.cookies.jwt, secret, async (err, decodedToken) => {
        await Post.find({ userId: decodedToken.id }).sort({ createdAt: -1 })
                  .then((result) => {
                      res.render('profile', {
                          posts: result
                      })
                  })
                  .catch ((err) => {
                      console.log(err)
                  })
    })
}

module.exports.profilePost = (req, res) => {
    jwt.verify(req.cookies.jwt, secret, async (err, decodedToken) => {
        const post = await new Post(req.body)
        post.userId = decodedToken.id
        post.save()
            .then((result) => {
                res.redirect('/profile')
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

module.exports.singlePostGet = async (req, res) => {
    await Post.findById(req.params.id)
              .then(async (result) => {
                  const post = result
                  await Comment.find({ postId: req.params.id })
                               .then((result) => {
                                   res.render('singlePost', {
                                       post,
                                       comments: result
                                   })
                               })
                               .catch((err) => {
                                   console.log(err)
                               })
              })
              .catch((err) => {
                  console.log(err)
              })
}

module.exports.singlePostPost = (req, res) => {
    jwt.verify(req.cookies.jwt, secret, async (err, decodedToken) => {
        const comment = await new Comment(req.body)
        comment.userId = decodedToken.id
        comment.postId = req.params.id
        comment.save()
               .then((result) => {
                   res.redirect('/singlePost/' + req.params.id)
               })
               .catch((err) => {
                   console.log(err)
               })
    })
}