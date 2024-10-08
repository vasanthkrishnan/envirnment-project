const mongoose = require('mongoose')


const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const login = mongoose.model("login", loginSchema)
module.exports = login