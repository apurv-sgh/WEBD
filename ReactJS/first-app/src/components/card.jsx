import React from 'react'
import "./card.css"


const card = (props) => {       
  //passing values using "props".
  //"{xyz}" for writing JS inside JSX. 
  //"{{xyz}}" for writing JS object or inline CSS inside JSX .

  return (

    <div className='card' style={{overflow: "hidden"}}>

        <img src="https://sphero.com/cdn/shop/articles/coding_languages_900x.png?v=1619126283" alt="" width={100}  style={{border:"2px solid black"}}/>

        <h1>{props.title}</h1>
        <p>{props.description}</p>
        
    </div>
  )
}

export default card
