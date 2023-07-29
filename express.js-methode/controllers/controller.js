//@asyncErrorhandler will handle the error thrown by the async function its an express library
//also can use try-catch block
// here we are using a common erroHamdler middleware is using @errorHandler
const asyncErrorhandler = require('express-async-handler')
const getContacts = (req, res) => {
    res.status(200).json({ message: 'okk everything works fine' })
}
const createContact =  asyncErrorhandler(async(req, res) => {
        const { name, email, phone } = req.body
        if (!name || !email) {
            //the error thrown by the block will handled by the @errorHandler middleware
            res.status(404)
            throw new Error("all fields are require")
        }
        res.status(200).json({ message: 'contact is created..' }) 
});


const getOneContact = (req, res) => {
    res.status(200).json({ message: `get the contact of ${req.params.id}` })
}
const updateConatct = (req, res) => {
    res.status(200).json({ message: `update the contact of ${req.params.id}` })
}
const deleteContact = (req, res) => {
    res.status(200).json({ message: `deleted the contact of ${req.params.id}` })
}


module.exports = {
    getContacts,
    getOneContact,
    createContact,
    updateConatct,
    deleteContact
}