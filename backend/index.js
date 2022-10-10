const express=require('express')
const connectDB = require('./config/db')
const app=express()
const cors=require('cors')
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// connect db
connectDB()

// middleware
app.use(express.json())
app.use(cors())
app.use('/api/users',require('./routes/user'))
// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

const port=process.env.PORT || 5100
app.listen(port,()=>console.log(`server running on port ${port}`))