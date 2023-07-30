const mongoose = require('mongoose')

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.CONNECT_MONGODB,{useNewUrlParser:true})
        console.log('MongoDB Connected Successfully...', mongoose.connection.host,mongoose.connection.name)
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = connectDb
