const express = require('express')
const app = express()
const dotenv = require('dotenv')
const  mongoose  = require('mongoose')
const routeUrls = require('./routes/routes')
const cors = require('cors')
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("connected"))
app.use(express.json())
app.use(cors())
app.use('/app',routeUrls)
app.listen(4000,()=>console.log("ready"))