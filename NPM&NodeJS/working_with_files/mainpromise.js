import fs from "fs/promises"    //importing module 

let a=await fs.readFile("ap2.txt")  //we can directly await here without being inside the async function bcz we r inside a module,
console.log(a.toString())

// let b=await fs.writeFile("ap2.txt","\n\n\nthis is fun")  //writing a file. 
// console.log(b)

let c=await fs.appendFile("ap2.txt","don")
console.log(c)