import Image from "next/image";

export default async function Home() {
 
  const data = await fetch('https://api.vercel.app/blog', {next:{revalidate:3600}})              
  /*By default NextJs stores the caches for a network call using fetch(thereby making the rerendering  very fast).

  However, there are exceptions, fetch requests are not cached when:
  -used inside a Server Action.
  -used inside a Route Handler that uses the POST method. */
  //this can be prevented by using {cache:"no-store"} in fetch(), resulting in a continous call to fetch data.
  //In case, If u want to revalidate/reload your data using fetch, you can use {next:{revalidate:3600}}, to make periodic call to your network fetch data.
  const posts = await data.json()

  return (

    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>

  )
}

//export const dynamic='force-dynamic'    //This page will now be rendered as dynamic page(server side rendering), i.e. fetch request is not cached now and everytime this page is rerendered.