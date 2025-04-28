import React from 'react'
import { useParams } from 'react-router-dom'
//Dynamic Routing using useParams()

const User = () => {

    const params=useParams()

  return (
    <div >
      Namm {params.username}
    </div>
  )
}

export default User
