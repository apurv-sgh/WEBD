const express = require('express')
const { dirname } = require('path')
const blog = require('./routes/blog') 

const app = express()
const port = 3001

app.use(express.static('public'))  //using static files
app.use('/blog', blog)



app.get('/', (req, res) => {
  console.log("hello its a get request")
  res.send('Hello World! GET')  //to the page
})
app.post('/', (req, res) => {
  console.log("hello its a post request")
  res.send('Hello BigBOss! POST')  //to the console
})
app.put('/', (req, res) => {
  console.log("hello its a put request")
  res.send('Hello Duniya ! PUT')  //to the console
})


/*//chaining of the requests
app.get('/', (req, res) => {
  console.log("hello its a get request")
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log("hello its a post request")
  res.send('Hello BigBOss!')
})*/


//sending html files over server
app.get('/index', (req, res) => {
  console.log("hello its a get request")
  res.sendFile('template/index.html',{root:__dirname})  //specify root or give full path.
})


app.get('/api', (req, res) => {
  res.json({a:1,b:2,c:3,d:4,nam:["don","dada"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})