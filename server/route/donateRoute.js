const express = require('express')
const router = express.Router()
const Donate = require('../models/donateModel')

router.post('/add', async (req, res) => {
    try {
        const newDonateData = new Donate(req.body)
        const { email, noOfTrees, rupees } = newDonateData
        if(!email || !noOfTrees || !rupees) {
            res.status(400).json({message: "email are required"})
        }
        const saveDonateData = await newDonateData.save()
        res.status(200).json(saveDonateData)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.get('/get', async (req, res) =>{
    try {
        const fetchedDonateData = await Donate.find()
        res.status(200).json(fetchedDonateData)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router