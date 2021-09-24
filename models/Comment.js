const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({ 
    userId: {
        type: String,
        reuired: true,
    },
    body: {
        type: String,
        reuired: true,
    },
    postId: {
        type: String,
        reuired: true,
    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment