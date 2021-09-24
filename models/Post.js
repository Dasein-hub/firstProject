const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({ 
    title: {
        type: String,
        reuired: true,
    },
    body: {
        type: String,
        reuired: true,
    },
    userId: {
        type: String,
        reuired: true,
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)
module.exports = Post