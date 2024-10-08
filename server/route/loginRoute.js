const express = require('express')
const router = express.Router()
const User = require('../models/loginModel')

router.post('/', async (req, res) => {
    const { name, password } = req.body

    try{
        const user = await User.findOne({ name })
        if(!user) {
            return res.status(400).json({ message: "User not found"})
        }
        if(user.name.toLowerCase() === name.toLowerCase()) {
            if(user.password === password) {
                return res.status(200).json({ message : "Login Successfully !"})
            }
            else {
                return res.status(400).json({ message: "Password is Wrong"})
            }
        }
    }
    catch (error) {
        return res.status(400).json({ message: "Server error"})
    }
})

module.exports = router