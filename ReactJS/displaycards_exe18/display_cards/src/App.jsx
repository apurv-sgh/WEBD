import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'

function App() {
  const [cards, setcards] = useState([])  //storing JSON APIs as array in useState.


  const fetchdata= async()=>{
    let a=await fetch("https://jsonplaceholder.typicode.com/posts") 
    let data=await a.json()
    setcards(data)
    console.log(data)
  }


  useEffect(() => {   //triggers the hook on every refresh/loading
    fetchdata()
  }, [])
  

  return (
    <>
    <Navbar></Navbar>

      <div className="container">

        {cards.map((card)=>{
          return <>
          <div key={card.id}  className="card">               {/* {card.xyz} is JS object. */}
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <br />
            <span>By: UserId:{card.userId}</span>
          </div>
          </>
        })}

      </div>
      
    </>
  )
}

export default App
