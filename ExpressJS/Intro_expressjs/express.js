const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
//app.use :to use middleware 
//express.static :builtin middleware func.

//app.get(path,handler) or app.post(path,handler) or app.put(path,handler) or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello Boss!')
})
/*app.get('/about', (req, res) => {
  res.send('Hello its about!')
})
app.get('/Blog', (req, res) => {
  res.send('Hello its a blog!')
})*/




/*//the multiple creation of the similar path makes its heavier code, this is resolved in expressJS by creating a variable for the path.
app.get('/Blog/into-to-js', (req, res) => {
  res.send('Hello its a blog of js!')
})
app.get('/Blog/into-to-python', (req, res) => {
  res.send('Hello its a blog of python!')
})*/
app.get('/Blog/:slug/:second', (req, res) => {    
  res.send(`Hello its a blog of ${req.params.slug} & ${req.params.second}!`)
  //slug & second is a variable & req.params.variable_name is a method to receive the variable.


  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params)   // will output variables { slug: 'intro-to-padosi' }
  console.log(req.query)    // will output query in the URL(?) { mode: 'dark', region: 'in' }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})