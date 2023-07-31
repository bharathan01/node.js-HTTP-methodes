const express = require('express')
const {loginUser,registerUser} = require('../controllers/userRegister')
const routes = express.Router()

routes.post('/register',registerUser)
routes.post('/login' ,loginUser)

module.exports = routes