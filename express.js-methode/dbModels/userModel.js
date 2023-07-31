const mongoose = require('mongoose')

const users = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"newUsers"
    },
    name:{
        type:String,
        type: String,
        required: [true,'the name must needed'],
        unique: false, 
    },
    email:{
        type:String,
        required: [true,'the email address must needed'],
        unique: false,
    },
    phone_no:{
        type:String,
        required: [true,'the phone number must needed'],
        unique: false,
    }

},{
    timestamps:true
})

module.exports = mongoose.model('user', users)
