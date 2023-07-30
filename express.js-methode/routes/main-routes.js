const express = require('express')
routes = express.Router()
const validateUserId = require('../middleWare/userIdValid')
const {getContacts,
    createContact,
    getOneContact,
    updateConatct,
    deleteContact} = require('../controllers/controller')



routes.get('/',getContacts)
routes.post('/',createContact)
routes.get('/:id', validateUserId,getOneContact)
routes.put('/:id', validateUserId ,updateConatct)
routes.delete('/:id', validateUserId ,deleteContact)


module.exports = routes