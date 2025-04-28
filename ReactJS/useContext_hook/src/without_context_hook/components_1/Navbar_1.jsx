import React from 'react'
import Button from './Button'

//using destructuring, without "props".
const Navbar = ({count}) => {   
  return (
    <>
    <div>
      Navbar
    </div>
    <Button count={count}/>
    </>
  )
}

//or using "props".
/*const Navbar = ({props}) => {   
  return (
    <>
    <div>
      Navbar
    </div>
    <Button count={props.count}/>
    </>
  )
}*/

export default Navbar
