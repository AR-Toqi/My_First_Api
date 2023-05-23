const express=require("express");
const router= require("./src/routes/api")
const app=new express();

// import middleware
   const rateLimit= require('express-rate-limit')
const helmet= require('helmet')
const MongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors= require("cors")
const xss=require('xss-clean')

// middleware implementation
app.use(cors())
app.use(hpp())
app.use(MongoSanitize())
app.use(helmet())
app.use(xss())

// rate limitation

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)


app.use("/api/v1",router)

module.exports=app;