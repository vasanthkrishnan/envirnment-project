require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnection = require('./config/db')
const login = require('./route/loginRoute')
const Contact = require('./route/contactRoute')
const Donate = require('./route/donateRoute')


app.use(express.json())
app.use(cors())

const port = process.env.PORT || 7777

app.use('/login', login)

app.use('/contact', Contact)

app.use('/donate', Donate)

app.get('/', (req, res) => {
    res.status(200).json("Welcome")
})

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})
