const express = require('express');
const mongoose = require('mongoose');
const { dbURI } = require('./dbURI')
const postRouter = require('./routes/postRouter');
const cookieParser = require('cookie-parser')

const app = express();
mongoose.connect(dbURI)
    .then(result => {
        app.listen(3000)
        console.log("Connected to db")
    })
    .catch(err => {
        console.log(err)
    })

app.set("view engine", "ejs")
app.use('/public', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(postRouter)

