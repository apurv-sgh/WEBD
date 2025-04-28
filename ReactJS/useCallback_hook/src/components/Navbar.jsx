import React from 'react'
import { memo } from 'react'


const Navbar = ({adjective, getadjective}) => {

    console.log("Navbar is rendered")

  return (
    <div>
      I m an {adjective} Navbar.

      <button onClick={()=>{getadjective()}}>change me {getadjective()}</button>

    </div>
  )
}

export default memo(Navbar)
