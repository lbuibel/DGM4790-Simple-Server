const express = require('express')

const router = express.Router()

router.use('/api',(req, res, next) => {
    res.json(
        {
            Name: 'Logan Uibel',
            Assignment: 1,
            Course: 'DGM-4790'
        }
    )
})

module.exports = router