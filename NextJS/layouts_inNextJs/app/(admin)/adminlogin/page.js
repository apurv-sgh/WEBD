import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login
      <p>Feel free to be notty</p>
    </div>
  )
}

export default page


//Creating Dynamic Metadata
export async function generateMetadata({params}){
  return{
    title: "GEok"
  }
}