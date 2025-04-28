import React,{useEffect} from 'react'

const Navbar = ({color}) => {
    
  //case 1:Run on every render;
  useEffect(() => {
    alert("Hey I will run on every render")
  })   //during loading,everytime(without dependency array)

  
  //case 2:Runs only on the first render.
  useEffect(()=>{
    alert("This is First Rendering!! Hey welcome to vite")
  },[])  //during loading(with dependency array)


  //case 3:Runs only when the certain values are changed; 
  useEffect(() => {
    alert("Hey I am running as color was changed.")
  }, [color])  //if there is a change in a particular state passed in the dependency array.


  /*Necessity of Dependency Array in useEffect:
 By specifying the dependencies in the dependency array, we tell React to only re-run the effect when the dependencies have changed.
  */

 //example of cleaning up:
 useEffect(() => {
  alert("Hey welcome to my page. cleaning up process")

  return () => {
    alert("component was unmounted")   //if the component is missing.
  }
}, [])

return (
  <div>
    I am navbar of {color} color hehe..
  </div>
)
}

export default Navbar