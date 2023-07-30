//@asyncErrorhandler will handle the error thrown by the async function its an express library
//also can use try-catch block
// here we are using a common erroHamdler middleware is using @errorHandler
const asyncErrorhandler = require('express-async-handler');
const userContact = require('../dbModels/userContact')


const getContacts = asyncErrorhandler(async (req, res) => {
    const extUsers = await userContact.find()
    if (extUsers) {
        res.status(200).json({ message: 'okk everything works fine', extUsers })
    }
})
const createContact = asyncErrorhandler(async (req, res) => {
    const { name, email, phone_no } = req.body
    if (!name || !email || !phone_no) {
        //the error thrown by the block will handled by the @errorHandler middleware
        res.status(404)
        throw new Error("all fields are require")
    }
    const userIn = await userContact.findOne({ name })
    if (userIn) {
        res.status(402)
        throw new Error('the contact name is already taken')
    }
    const newUser = await userContact.create({
        name,
        email,
        phone_no
    })
    if (newUser) {
        res.status(200).json({ message: 'contact is created..', newUser })
    }

});


const getOneContact = asyncErrorhandler(async (req, res) => {
    const userId = req.params.id

    const oneContact = await userContact.findById(userId)
    if (oneContact) {
        res.status(200).json({ oneContact })
    }
})
const updateConatct =asyncErrorhandler(async(req, res) => {
    const userId = req.params.id
    const { name, email, phone_no } = req.body
    const updateUserContact = await userContact.findByIdAndUpdate(userId,{
        name,
        email,
        phone_no
    })
    if(updateUserContact){
        console.log(updateUserContact)
        res.status(200).json({ message: `update the contact of`,updateUserContact})
    }
    
})
const deleteContact = asyncErrorhandler(async(req, res) => {
    res.status(200).json({ message: `deleted the contact of ${req.params.id}` })
})


module.exports = {
    getContacts,
    getOneContact,
    createContact,
    updateConatct,
    deleteContact
}