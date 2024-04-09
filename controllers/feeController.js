const feeData = require('../models/fee')
// Gets all the fee data 
const getAllFees = (req,res) => {
res.json(feeData)
}

module.exports = {getAllFees}



