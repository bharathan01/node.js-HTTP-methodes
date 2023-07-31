const asyncErrorhandler = require('express-async-handler');


const loginUser= asyncErrorhandler(async (req, res) => {
        res.status(200).json({ message: 'okk everything works fine'})
})
const registerUser = asyncErrorhandler(async (req, res) => {
    res.status(200).json({ message: 'okk everything works fine' })
})

module.exports = {
    loginUser,
    registerUser
}