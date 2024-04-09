const express = require('express')
const router = express.Router()
const {getAllFees} = require('../controllers/feeController')

// One endpoint to get request to /user 
router.get('/fee',getAllFees)

module.exports = router  