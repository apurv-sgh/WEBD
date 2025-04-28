import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//#NOTE:We use Router in ReactJS instead of Anchor tag(<a/>),but Router elements like Link & NavLink are rendered as anchor tag only in html.
/*A router in React JS is a JavaScript package that helps you manage URLs and application state.
React Router gives the functionality of routing through the pages without reloading (using Link),but anchor doesn't so.
*/

/*
Step1: npm i react-router-dom
Step2: In App.jsx: import {createBrowserRouter,RouterProvider} from 'react-router-dom'
Step3: Now create router using "createBrowserRouter" and include it using "RouteProvider".
*/


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },


    {
      path:"/user/:username",       //here username is a variable begin passed to the routeSS(dynamic routing), syntax ":var_name"
      element:<><Navbar/><User/></>
    }

  ])


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
