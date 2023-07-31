
const mongoose = require('mongoose')

const userRegModel = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    emailId:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
    
})
module.exports = mongoose.model('newUsers' ,userRegModel)