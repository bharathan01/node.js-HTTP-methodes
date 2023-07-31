const express = require('express');
const routes = require('./routes/main-routes')
const bodyParser = require('body-parser');
const errorhandler = require('./middleWare/errorHandler');
const connectDb = require('./mongoDb/connectMongoDb')
const userRoutes = require('./routes/userRegister')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT_NO

const app = express()
app.use(bodyParser.json())

app.use('/api/connect', routes)
app.use('/api/user', userRoutes)
app.use(errorhandler)

connectDb()

app.listen(PORT, () =>{
    console.log(`server started at then port http://locathost:${PORT}`);
}) 