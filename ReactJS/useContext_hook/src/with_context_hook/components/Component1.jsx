import React from 'react'
import { useContext } from 'react'
import { countercontext } from '../context'


const Component1 = ( ) => {

  const value=useContext(countercontext)
  
  return (
    <div>

      component1 hoon
      <br />
      {value.count}
      
    </div>
  )
}

export default Component1
