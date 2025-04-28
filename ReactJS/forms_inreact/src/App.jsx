import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

//Register:This method allows you to register an input or select element and apply validation rules to React Hook Form.


function App() {
  const {
    register,
    handleSubmit,
    setError,                 //including the function to set custom errors
    formState: { errors, isSubmitting },
  } = useForm();


  const delay=(d)=>{

    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  const onsubmit=async(data)=>{
    //await delay(3)        //simulating network delay
    let r=await fetch("http://localhost:3000/",  {method:"POST", body: JSON.stringify(data)})
    let res=await r.text()
    console.log(data,res)

    /*
    if(data.username!=="Raghav")                //handling custom errors.
      setError("myform", {message:"Inavlid ID/Password"})
    if(data.username==="Rohan")
      setError("blocked",{message:"User is Blocked"})
    */
  }



  return (
    <>
    {isSubmitting && <div>Loading...</div>}

      <div className="container">
        <form action="" onSubmit={handleSubmit(onsubmit)}>


          {/* <input placeholder='Username' {...register("username", {required:true, minLength:3, maxLength:7 })} type="text"  />
          {errors.username && <div>Some error occured</div>}
          <br /> */}


          <input placeholder='Username' {...register("username", {required:{value:true, message:"This field is Required"}, minLength:{value:3, message:"Error in minlength"}, maxLength:{value:7, message:"Error in maxlength"} })} type="text"  />
          {errors.username && <div className='red'>{errors.username.message}</div>}           {/*receiving errors and display message */}
          <br />


          <input placeholder='Password' {...register("password")} type="password" />
          <br />


          <input disabled={isSubmitting} type="submit" value='submit' />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}              {/*Throwing custom errors. */}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
