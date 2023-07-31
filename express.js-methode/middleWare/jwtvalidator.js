const jwt = require('jsonwebtoken')
const asyncErrorhandler = require('express-async-handler')


const jwtValidator = asyncErrorhandler(async (req, res, next) => {

    const token = req.headers.hai 
    if (token) {

        jwt.verify(token, process.env.PRIVATE_KEY, (err, decode) => {
            if (err) {
                res.status(401)
                throw new Error('token is invalid')
            }
            req.user = decode.user
            next()
        })
    }
    else {
        res.status(401)
        throw new Error('token is invalid')

    }

})

module.exports = jwtValidator