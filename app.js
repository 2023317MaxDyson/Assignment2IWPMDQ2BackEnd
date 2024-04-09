const express = require('express')
const app = express()
const feeRoutes = require('./routes/feeroute.js')

app.use((req,res,next)=> { 
res.setHeader("Access-Control-Allow-Origin","*"); 
next();
})

app.use(express.urlencoded({extended: false}))

app.use(express.json())
app.use(feeRoutes)

// port number is 6954
app.listen(6954, ()=>{
    console.log('server is running........')
})


