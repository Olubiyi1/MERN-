require("dotenv").config()
const userRouter = require("./Routes/user")
// import express
const express = require("express")
// import mongoose
const mongoose = require("mongoose")

// startup express
const app = express()


// middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    
// listen for request
app.listen(process.env.PORT, ()=>{
    console.log("connected to db and running on port", process.env.PORT);
    })
}).catch((err)=>
{
console.log(err);

})

app.use(express.json())
app.use("/api/user",userRouter)

