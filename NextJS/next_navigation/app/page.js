"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";


export default function Home() {


  const searchparams=useSearchParams()          //useSearchParams is a Client Component hook that lets you read the current URL's query string.(as string so use getter method).


  return (
    <div>
      Hello this is home page and blog is{searchparams.get ('blog')} and utm_source is {searchparams.get ('utm_source')}
    </div>
  );
}
