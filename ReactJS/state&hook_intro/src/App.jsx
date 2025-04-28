import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a=5; //JS variable.

  const [count, setCount] = useState(0)       
  //here "count" is a variable that initialises with the hook "useState(0)" and "setcount" is a function that perform operation on "count".  

  return (
    <>
     
     <div>Count:{count}</div>
     <button onClick={()=>{setCount(count+1)}}>Update Count</button>
     {/*increament the value of "count" & reflect it  in Display also using "useState" hook */}
    {/*this is among one of the functionalities of the State Hook. */}
     
     <br />

     <div>a:{a}</div>
     <button onClick={()=>{a=a+1}}>Update a</button>
    {/*increament the value of "a" and stores it in "a" but does not reflect it in the Display.*/}
    </>
  )
}

export default App
