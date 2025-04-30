/*
import { NextResponse } from 'next/server'
   
// This function can be marked `async` if using `await` inside
export function middleware(request) {


    //return NextResponse.json({message:"Welcome babu, Juice pee loo, Mausambi ka"})

  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
*/



//Using Conditional Statement:
import { NextResponse } from 'next/server'
 
export function middleware(request) {



      // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 




  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }             //rewrite method just redirect to some other page using middlewares but maintain the data as before (i.e. it shows same page data on some different page url)
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }



  

// Set a new response header `x-hello-from-middleware2`
response.headers.set('x-hello-from-middleware2', 'hello')
return response

}
