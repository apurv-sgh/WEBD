"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname=usePathname()      //this hook outputs the cuurent path of the page.

  return (
    <div>    
        <div>Navbar</div>
        <div>You r inside {pathname}</div>
    </div>

  )
}

export default Navbar
