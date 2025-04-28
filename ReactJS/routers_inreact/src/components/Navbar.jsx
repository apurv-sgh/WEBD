import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


//Link is used to route through the pages without reloading,better than anchor tag .

//Link is used for basic navigation, while the NavLink is used to create and highlight active links in navigation menus


const Navbar = () => {
    
  return (
    <div>
        <nav>

            {/*USING ANCHOR TAG */}
            {/* <a href="/"><li>Home</li></a>
                <a  href="/about"><li>About</li></a>
                <a  href="/login"><li>Login</li></a> */}
            
            {/*USING LINK */}
            {/* <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/login"><li>Login</li></Link> */}

            {/*USING NAVLINK */}
            <NavLink className={(e)=>{return e.isActive?"red":""}}  to="/"><li>Home</li></NavLink >
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink >
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink >
        
        </nav>
      
    </div>
  )
}

export default Navbar
