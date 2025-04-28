import { useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Usecase 1 of useRef() hook:persisting the value of a variable across all rerendering.
function App() {
  const [count, setCount] = useState(0)     


  /*let a=0;    //static variable gets re-initialized on every rerendering*/
  const a = useRef(0)     //the value of a persists across all rerendering.(does not re-initialize)


  //NOTE:if the value of "state" is changed the page will rerender itself always but in case of "Ref" the page will not rerender.


  
  useEffect(() => {
    a.current=a.current+1;
    console.log(`Rendering the page & the value of a is ${a.current}`)
  },)
  

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
