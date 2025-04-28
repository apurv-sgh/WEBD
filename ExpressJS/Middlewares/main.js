const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
const blog = require('./blog')

// app.use(express.static("public"))
app.use('/blog', blog)


//writing Middleware
app.use((req, res, next)=> {
    console.log(req.headers)
    req.appu=76; //adds appu in req object
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    //res.send("Sending responses to server")     //no further execution of the request as the response is already send to server.
    console.log(`${Date.now()} is a ${req.method}`)     
    next()      //next is used to shift the request to the next middleware/router.
})
app.use((req, res, next)=> {
    console.log('m2')
    next()      //here after next() shifts the request to the next router like res.send()
})
//this request(req) will shift its control  to the next, until & unless its raches the router to the send the response. 



/*//using middleware as a function
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
app.use(myLogger)*/


app.get('/', (req, res) => {
    res.send('Hello World!' + req.appu)     //using req.appu object
})

app.listen(3000)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})