const mongoose = require('mongoose');
// const bcrypt=require('bcrypt');

// Define the user schema
const userSchema =new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    age: {
        type:Number
    },

    email: {
        type:String,
        required:true
    },

    mobile : {
        type:String
    },

    address : {
        type:String,
        required:true
    },
    aadharcardNumber : {
type:Number,
required:true,
unique:true
    },

         password : {
        type:String,
        required:true
    },

    role: {
        type:String,
        enum:['voter','admin'],
        default:'voter'
    },
    isvoted:{
        type:Boolean,
        default:false
    }

});

const User = mongoose.mode('User',userSchema);
module.exports=User;