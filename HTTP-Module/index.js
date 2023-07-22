const employee = require('./data')
const http = require('http')
const url = require('url')

const Api = '/api/data'

const server = http.createServer((req, res) => {

    //getting the req url return an object 
    const pathUrl = url.parse(req.url, true)
    // end point of the url
    const endPoint = pathUrl.pathname
    // return the id from the url use query
    const empId = pathUrl.query.id
    //return the request methode
    const method = req.method

    try {
        // 
        if (method === 'GET' && endPoint === Api + '/employe') {
            if (empId) {
                res.writeHead(200)
                const empDetails = employee.find((e) =>{
                  return e.id == empId
                })
                res.end(
                `
                Employee ID : ${empDetails.id} 
                Employee Name: ${empDetails.name} 
                Employee Designation : ${empDetails.designation}
                Employee salary : ${empDetails.salary}`
                )
            }
            else{
                req.write('please enter the employee id')
            }
        }
        else {
            res.writeHead(404)
            res.end('page note found')
        }
    }
    catch {
        res.writeHead(500)
        res.end('SERVER ERROR')
    }
});


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running on the http://localhost:${PORT}`)
})
