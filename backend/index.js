const express=require('express')
const connectDB = require('./config/db')
const app=express()

// connect db
connectDB()

// middleware
app.use(express.json())
app.use('/api/users',require('./routes/user'))

const port=process.env.PORT || 5100
app.listen(port,()=>console.log(`server running on port ${port}`))