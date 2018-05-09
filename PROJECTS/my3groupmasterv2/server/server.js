const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 9000
require("dotenv").config()
const expressJwt = require("express-jwt")

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({secret: process.env.SECRET}))

    mongoose.connect('mongodb://localhost/dots-and-lines', (err) => {
        if (err) throw err
        console.log('Connection Complete')
    })

app.use('/api/games', require('./routes/games'))
app.use('/auth', require('./routes/auth'))


app.listen(port, () => {
    console.log(`Go forth and conquer via  port: ${port}`)
})
