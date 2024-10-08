const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel')

router.post('/add', async (req, res) => {
    try {
        const newContactData = new Contact(req.body)
        const { name, email, subject, message } = newContactData
        if(!name || !email || !subject || !message) {
            res.status(400).json({message: "Name, email, subject, message are required"})
        }
        const saveContactData = await newContactData.save()
        res.status(200).json(saveContactData)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.get('/all', async (req, res) => {
    try {
        const fetchedContactData = await Contact.find()
        console.log(fetchedContactData)
        res.status(200).json(fetchedContactData)
    }
    catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router