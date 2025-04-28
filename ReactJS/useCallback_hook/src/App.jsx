import { useState , useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'



/*useCallback Hook is a built-in React Hook that memoizes a callback function, preventing it from being recreated on every render unless its dependencies change. 
useCallback Hook returns a memoized callback function */



function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good")
  


  // const getadjective=()=>{                    //although this function doesn't gets changed but is considered changed upon every return in JS thus causing change in the prop so therefore excites re-rendering everytime.

  //   return "another_good"
  // }


  //Syntax:const cachedFunc = useCallback(fn, dependencies)
  const getadjective=useCallback(() => {
      return "another_good"+count
  },[count])
  


  return (
    <>

    <Navbar adjective={"good"} getadjective={getadjective}/>

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
