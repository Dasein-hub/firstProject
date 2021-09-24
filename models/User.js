const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({ 
    name: {
        type: String,
        reuired: true,
    },
    email: {
        type: String,
        reuired: true,
    },
    password: {
        type: String,
        reuired: true,
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User