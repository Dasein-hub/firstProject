const express = require('express');
const mongoose = require('mongoose');
const { dbURI } = require('./dbURI')
const postRouter = require('./routes/postRouter');

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
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(postRouter)

