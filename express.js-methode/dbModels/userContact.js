const mongoose = require('mongoose')

const userContact = mongoose.Schema({
    name:{
        type:String,
        type: String,
        required: [true,'the name must needed'],
        unique: true,
    },
    email:{
        type:String,
        required: [true,'the email address must needed'],
        unique: true,
    },
    phone_no:{
        type:String,
        required: [true,'the phone number must needed'],
        unique: true,
    }

},{
    timestamps:true
})

module.exports = mongoose.model('userContacts', userContact)
