
const ObjectId = require('mongoose').Types.ObjectId

const validateUserId = (req,res,next) =>{
    if(ObjectId.isValid(req.params.id) == false){
        res.status(401).json({message:'please enter a valid user id'})
    }
    else{
        next()
    }

}
module.exports = validateUserId 