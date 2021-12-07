const fs = require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    // console.log(req)
    res.end('Hello World')
})
server.listen(3000,'127.0.0.1',()=>{
    console.log("Hello Everyone at port 3000")
})