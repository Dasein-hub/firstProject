const express = require('express');
const mongoose = require('mongoose');

const app = express();
const dbURI = "mongodb+srv://dasein:12345@firstcluster.kbibr.mongodb.net/firstProject?retryWrites=true&w=majority"
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

app.get('/', (req, res) => {
    res.render('index')
})