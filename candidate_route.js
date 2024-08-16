const mongoose = require('mongoose');
// const bcrypt=require('bcrypt');

// Define the user schema
const candidateSchema =new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

party : {
    type:String,
    required:true
},
age : {
    type:Number,
    required:true
},

votes: [    //nested obj
    {
user : {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},

votedAt : {
    type : Date,
    default:Date.now()

      }
    }
]  ,

votecount : {
    type:Number,
    default:0

}
});

const User = mongoose.mode('candidate',candidateSchema);
module.exports=candidate;