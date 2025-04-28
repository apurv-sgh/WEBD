import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Navbar from './components/navbar';  //importing the components as module.
import Footer from './components/footer';

function App() {

  const [value,setValue]=useState(0)    //declaring a variable "value" and a reference variable "setValue" for "value" to setting its default state to 0. (State in React)

  return (
    // this is now from here JSX(javascriptreact).
    <div className="App">

      <Navbar logotext="Appu Bhaiya"/>      {/* making the call to the imported Components in JSX. */}

    <div className="value">{value}</div>     
    {/* any JS statement  will be valid inside "{}" */}
    <button onClick={()=>{setValue(value+1)}}>Click me</button>

     <Footer/> 

    </div>
  );
}

export default App;
