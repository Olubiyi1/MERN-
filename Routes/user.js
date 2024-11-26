
const express = require("express")
const UserSchema = require("../Modules/userSchema")

const Router = express.Router()


// creating routes CRUD

// Read
Router.get("/",(req,res)=>{
    res.json({
        mssg:"All Api"
    })
})

// Create
Router.post("/",async(req,res)=>{

    const{name,gender,password}=req.body

    try{
        const user = await UserSchema.create({
            name,gender,password
        })
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json(
            {error:error.message}
        )
    }
})


// update
Router.patch("/:id",(req,res)=>{
    res.json({
        mssg:"updating"
    })
})

// delete
Router.delete("/:id",(req,res)=>{
    res.json({
        mssg:"Deleting an id"
    })
})


module.exports = Router