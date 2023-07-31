

const validateReqBody = (req,res,next) =>{
    if(Object.keys(req.body).length === 0){
        res.status(401).json({message:'Null data can not be pass'})
    }
    else{
        next()
    }

}
module.exports = validateReqBody 