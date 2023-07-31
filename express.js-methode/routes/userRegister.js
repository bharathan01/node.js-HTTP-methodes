const express = require('express')
const {loginUser,registerUser} = require('../controllers/userRegister')
const routes = express.Router()
const validateReqBody  = require('../middleWare/nullBody')


routes.post('/register',validateReqBody,registerUser)
routes.post('/login',validateReqBody ,loginUser)

module.exports = routes