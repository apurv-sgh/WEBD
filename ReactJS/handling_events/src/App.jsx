import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("hola")
  const [form, setform] = useState({email:" ",phone:" "})


  //Event Listener:
  const handleclick=()=>{
    alert("Hey I m clicked.")
  }
  const handlemouseover=()=>{
    alert("Hey I m mousehover.")
  }

  const handleinputchange=(e)=>{    //handling multiple input field change.

    // setname(e.target.value)
    // setform(e.target.name)

    setform({...form,[e.target.name]:e.target.value})      //".target" specifies the element calling the listener.
    console.log(form)
  }


  return (
    <>

      {/*Event Handler */}
      <div className="button">
        <button onClick={handleclick} >click me</button>
      </div>

      {/* <div className="red" onMouseOver={handlemouseover}>
        I am Red.
      </div> */}

      {/* <input type="text" value={name} onChange={handleinputchange} /> */}
      
      <input type="text" name="email" value={form.email} onChange={handleinputchange} />

      <input type="text" name='phone' value={form.phone} onChange={handleinputchange} />
      
      {/* Conditional Event handling*/}
      {/*<input type="text" name="email" value={form.email?form.email:" "} onChange={handleinputchange} /> */}

    </>
  )
}

export default App
