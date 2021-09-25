const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { secret } = require('../secret')

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.redirect('/')
            } else {
                next()
            }
        })
    } else {
        res.redirect('/')
    }
}

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.locals.user = null
                next()
            } else {
                let user = await User.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    } 
    else {
        res.locals.user = null
        next()
    }
}

