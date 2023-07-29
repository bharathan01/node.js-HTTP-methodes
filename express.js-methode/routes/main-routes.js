const express = require('express')
routes = express.Router()
const {getContacts,createContact,getOneContact,updateConatct,deleteContact} = require('../controllers/controller')



routes.get('/',getContacts)
routes.post('/',createContact)
routes.get('/:id',getOneContact)
routes.put('/:id',updateConatct)
routes.delete('/:id',deleteContact)


module.exports = routes