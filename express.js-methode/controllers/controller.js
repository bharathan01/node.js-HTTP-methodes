//@asyncErrorhandler will handle the error thrown by the async function its an express library
//also can use try-catch block
// here we are using a common erroHamdler middleware is using @errorHandler
const asyncErrorhandler = require('express-async-handler');
const user = require('../dbModels/userModel')


const getContacts = asyncErrorhandler(async (req, res) => {
    const extUsers = await user.find()
    if (extUsers) {
        res.status(200).json({ message: 'okk everything works fine', extUsers })
    }
})
const createContact = asyncErrorhandler(async (req, res) => {
    const { name, email, phone_no } = req.body
    const newUser = new user({
        name, 
        email,
        phone_no
    })
    const newUserData = await newUser.save()
    if (newUserData) {
        res.status(200).json({ message: 'contact is created..', newUser })
    }

});


const getOneContact = asyncErrorhandler(async (req, res) => {
    const userId = req.params.id

    const oneContact = await user.findById(userId)
    if (oneContact) {
        res.status(200).json({ oneContact })
    }
})
const updateConatct = asyncErrorhandler(async(req, res) => {
    const userId = req.params.id
    const { name, email, phone_no } = req.body
    const updateUserContact = await user.findOneAndUpdate({_id:userId},{
        name,
        email, 
        phone_no 
     },{new:true})
    if(updateUserContact){
        console.log(updateUserContact)
        res.status(200).json({ message: `update the contact of`,updateUserContact})
    }
     
})
const deleteContact = asyncErrorhandler(async(req, res) => {
    const userId = req.params.id
    const deleteContact = await user.deleteOne({_id:userId})
    if(!deleteContact){
        res.status(400)
        throw new Error('somthing went wrong..can not delete the user')
    }
    res.status(200).json({ message: `deleted the contact of ${req.params.id}` })
})


module.exports = {
    getContacts,
    getOneContact,
    createContact,
    updateConatct,
    deleteContact
}