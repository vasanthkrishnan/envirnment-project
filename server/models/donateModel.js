const mongoose = require('mongoose')


const donateSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    noOfTrees: {
        type: Number,
        required: false,
    },
    rupees: {
        type: Number,
        required: false,
    }
})

const Donate = mongoose.model("Donate", donateSchema)
module.exports = Donate