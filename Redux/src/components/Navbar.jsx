import React from 'react'
import { useSelector, } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)

  return (
    <div>
      I m a number and my count is 
    </div>
  )
}

export default Navbar
