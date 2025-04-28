/*In NextJs, by default everything is a "Server-Component" (i.e. the page first renders on the server than gets converted to HTML before reaching to the client )*/


// "use client"      //Declaraing "Client-Component" while using useState hook.

// import {useState,useEffect} from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {

  // const[count,setCount]=useState(0);

  //Server side working.
  console.log("hii Rajauu")
  let a=fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (
    <div>

      <Navbar></Navbar>   {/*embedding Client-Component(Navbar) under Server-Component. */}

      I am a component 
      {/* {count}. 
      <button onClick={()=>setCount(count+1)}>Daboo raja</button>  */}
      
    </div>
  );
}
