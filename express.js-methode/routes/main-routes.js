const express = require('express')
routes = express.Router()
const validateUserId = require('../middleWare/userIdValid')
const {getContacts,
    createContact,
    getOneContact,
    updateConatct,
    deleteContact} = require('../controllers/controller')
const validateReqBody  = require('../middleWare/nullBody')



routes.get('/',getContacts)
routes.post('/',validateReqBody,createContact)
routes.get('/:id', validateUserId,getOneContact)
routes.put('/:id',validateReqBody, validateUserId ,updateConatct)
routes.delete('/:id', validateUserId ,deleteContact)


module.exports = routes