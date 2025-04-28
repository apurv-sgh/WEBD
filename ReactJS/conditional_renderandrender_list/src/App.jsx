import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title:"ram1",
      desc:"I m ram1"
    },
    {
      title:"ram2",
      desc:"I m ram2"
    },
    {
      title:"ram3",
      desc:"I m ram3"
    },
    {
      title:"ram4",
      desc:"I m ram4"
    }
  ])



/*
  //function returning a mini component.
  const Todo=({todo})=>{
    return(
      <>
      <div className="m-4 border-2 border-b-cyan-950">
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      </div>
      </>
  )}
  */



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>




      {/* Conditional Rendering (2 types) :*/}

      {/* {showbtn?<button>showbtn is true</button>:<button>showbtn is false</button>}*/}         {/*using ternary statement */}

      {showbtn && <button>Shown only when shownbtn is clicked</button>}          {/*if "showbtn" true then only display button*/}



      {/*iterating the todo object / Rendering List:*/}
      {todos.map(todo=>{

          // return <Todo key={todo.title} todo={todo}/>          //returning,using Todo function.

          return(
            <>
            <div key={todo.title} className="m-4 border-2 border-b-cyan-950">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
            </div>
            </>
          )

      })}
  


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
