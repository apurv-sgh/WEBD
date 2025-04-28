//reference:https://www.npmjs.com/package/mongodb

// npm i mongoose
//npm i express@4


import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";


let con=await mongoose.connect("mongodb://localhost:27017/todo ")
const app = express()
const port = 3000


app.get('/', (req, res) => {

    const todo = new Todo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })

    todo.save() 
    res.send('Hello World!')

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//Making custom command:
// In package.json under script we can add: "dev":"nodemon main.js"   and run-> npm run dev  to run the nodemon command.