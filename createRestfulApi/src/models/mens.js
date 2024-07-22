const express=require('express')

const  Mongoose  = require('mongoose')

const menSchema=new Mongoose.Schema({
    ranking:{
        type:Number,
       

    },
    name:{
        type:String,
       
        trim:true
    },
    dob:{
        type:Date,

    },
    country:{
        type:String,
        trim:true
    },
    score:{
        type:Number,
      
    },
    event:{
        type:String,
        default:"100m"
    }
})

const MensRanking=new Mongoose.model("MenRanking",menSchema)
module.exports=MensRanking;