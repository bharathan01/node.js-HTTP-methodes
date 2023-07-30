
const errorhandler = (err, req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode:500

switch (statusCode) {
    case 400:
        res.json({
            title:'Bad Request',
            message:err.message,
            stackTrace:err.stack
        });
        break;
    case 401:
        res.json({
            title:'Unauthorized',
            message:err.message,
            stackTrace:err.stack
        });
        break;
    case 402:
        res.json({
            title:'validation faild',
            message:err.message,
            stackTrace:err.stack
        });
        break;
    case 403:
        res.json({
            title:'Forbidden', 
             message:err.message,
             stackTrace:err.stack
        });
        break;
    case 404:
        res.json({
            title:' Not Found',
            message:err.message,
            stackTrace:err.stack
        });
         break;
    case 500:
       res.json({
         title:'Sever Error',
        message:err.message,
        stackTrace:err.stack
        })
    break;
                      
    default:
        console.log('Somthing is wrong ! please try after some time')
        break;
}
}
module.exports = errorhandler


