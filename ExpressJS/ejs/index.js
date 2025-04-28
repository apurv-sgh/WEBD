const express = require('express')
const app = express()
const port = 3000

//EJS(Embedded JavaScript Templates) is a template engine or a view engine that can be used to put the variables to the html page directly, EJS uses JavaScript logic to generate HTML knows as ".ejs page".

//ejs with express, references: https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//https://ejs.co/

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let title="ramadhir singh "
  let content="tumse na hopayega."
  let arr=["faisal khan","perpendicular","sardar khan"]
  res.render('index',{title:title,content:content,arr}) //passing content to the page.
})

app.get('/blog/:slug', (req, res) => {
  let blogtitle="ramdhari singh dinkar"
  let blogcontent="man of his words."
  res.render('templates/blogpost.html',{blogtitle:blogtitle,blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 