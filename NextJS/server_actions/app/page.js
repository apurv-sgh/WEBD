"use client"
import { SubmitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref =useRef()    //clearing the form data from input after submitting use useRef hook
  
  return (

    <div className="w-2/4 mx-auto my-4">
      <form ref={ref} action={(e)=>{
      SubmitAction(e); e.ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name"  id="name" className="text-black mx-4 bg-white border-b-blue-900" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
        <input name="add" id="add" className="text-black mx-4 bg-white border-b-blue-900" type="text" />
        </div>
        <div>
          <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>  
  );
}
