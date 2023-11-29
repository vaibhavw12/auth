import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(cors())

app.listen(3000,async ()=>{
    await mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("database connected successfully")
    }).catch((err)=>{
        console.log(err)
    })
    console.log('server is running successfully on port 3000!')
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)