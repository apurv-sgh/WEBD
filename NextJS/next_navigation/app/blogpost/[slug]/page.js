"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {

const params=useParams();             //useParams is a Client Component hook that lets you read a route's dynamic params filled in by the current URL.

const router=useRouter();            // The useRouter hook allows you to programmatically change routes inside Client Components.
//Note: changing routes can also be done through Link hook but this allows programmatically changing of routes.(e.g. below)

//benefit of useRouter hook over link hook:
useEffect(() => {
    setTimeout(() => {
        router.push("/dashboard")
    }, 2333);
}, [])


  return (
    <>
    <div>
      {params.slug}
    </div>

    <div>
      <button type="button" onClick={()=>{router.push('/dashboard')}}>Dashboard</button>
    </div>
    </>
  )
}

export default page
