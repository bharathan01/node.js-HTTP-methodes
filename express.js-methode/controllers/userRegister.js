const asyncErrorhandler = require('express-async-handler');
const userRegModel = require('../dbModels/userRegModel');
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const loginUser = asyncErrorhandler(async (req, res) => {
   
    const {emailId,password} = req.body
    const loginUser = await userRegModel.findOne({emailId})
    if(!loginUser){
        res.status(402)
        throw new Error('Inavalid Email Address')
    }
    if(await bcrypt.compare(password,loginUser.password)){
        const {emailId,username,_id} = loginUser
        const jwtToken = jwt.sign( {user:{emailId,username,_id}},process.env.PRIVATE_KEY,{expiresIn: '10m'})
        res.status(200).json({ message: 'login Successful',emailId,username,_id,jwtToken})
    }
    else{
        res.status(500)
        throw new Error('server error ! please try after some time.')
    }

    
})
const registerUser = asyncErrorhandler(async (req, res) => {
    const { username, emailId, password } = req.body

    const userIsPresent = await userRegModel.findOne({ emailId })
    if (userIsPresent) {
        res.status(400)
        throw new Error('Email adderss is already present..')
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new userRegModel({
        username,
        emailId,
        password: hashPassword
    })
    const userData = await newUser.save()
    if (!userData) {
        res.status(500)
        throw new Error('server error ! please try after some time.')
    }
    res.status(200).json({ message: 'registed successfully' })


})

module.exports = {
    loginUser,
    registerUser
}