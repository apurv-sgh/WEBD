import React from 'react'
import Component1 from './component1'
import { countercontext } from '../context'
import { useContext } from 'react'


const Button = () => {

  const value=useContext(countercontext)

  return (
    <div>
      <button onClick={()=>{value.setCount((count)=>count+1)}}><span><Component1 /></span></button>
    </div>
  )
}

export default Button
