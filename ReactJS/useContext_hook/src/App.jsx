import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './with_context_hook/components/Navbar'
import './App.css'
import { countercontext } from './with_context_hook/context'

//useContext hook:It is used to share the data through different React Components without passing the props manually for every level of the component tree. It is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily.

function App() {
  const [count, setCount] = useState(0)


  return (
    <>

    <countercontext.Provider value={{ count ,setCount}}>
    <Navbar />

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

      </countercontext.Provider>

    </>
  )
}

export default App
