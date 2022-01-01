// import express from 'express'
// import dotenv from 'dotenv'
// import path from 'path'

// import { dbConnection } from './server/config/dbConnection.js'
// import propertyRoutes from './server/routes/propertyRoutes.js'
// import vendorRoutes from './server/routes/vendorRoutes.js'
// import adminRoutes from './server/routes/adminRoutes.js'

const express = require('express');
const dotenv = require('dotenv');
const path = require('path') 
const cors = require('cors');


const dbConnection = require('./server/config/dbConnection.js').dbConnection;
const propertyRoutes = require('./server/routes/propertyRoutes.js');
const vendorRoutes = require('./server/routes/vendorRoutes.js')
const adminRoutes = require('./server/routes/adminRoutes.js')   


/* Settings and configurations */
const app = express()

// const __dirname = path.resolve(path.dirname(''))
dotenv.config()
app.set('json spaces', 2)
app.use(express.json({ limit : '30mb', extended : true}))
app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders : ['Content-Type', 'Authorization'],
    
    // credentials : true
}))
const PORT = process.env.PORT || 7000


app.listen(PORT, ()=>{
    dbConnection()
    console.log(`Server running on port ${PORT}`)
})


app.use('/api/property', propertyRoutes)
app.use('/api/vendor', vendorRoutes)
app.use('/api/admin', adminRoutes)

// app.use(express.static(path.join(__dirname, '/users/build')))
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, "/users", "build", "index.html"))
// })

