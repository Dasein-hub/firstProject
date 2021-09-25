const jwt = require('jsonwebtoken')
const { secret } = require('../secret')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const createToken = (id) => {
    return jwt.sign({ id }, secret )
}

module.exports.indexLogInPost = async (req, res) => {
    const { name, password } = req.body
    const user = await User.findOne({ name })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            const token = createToken(user._id)
            res.cookie('jwt', token, { httpOnly: true})
            res.redirect('/')
        } 
        else {
            throw Error('incorrect password')
        }
    } 
    else {
        throw Error('username doesnt exist')
    }
}

module.exports.indexSignInPost = async (req, res) => {
    const user = await User.create(req.body)
    const token = createToken(user._id)
    const salt = await bcrypt.genSalt()
    user.password = await bcrypt.hash(user.password, salt)
    user.save()
        .then((result) => {
            res.cookie('jwt', token, { httpOnly: true })
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
}