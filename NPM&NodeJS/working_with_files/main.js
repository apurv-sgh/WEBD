const fs=require("fs") //including "fs" module
//Note:if we change type of package.json to module from commonJS then require() fails and import works.
console.log(fs) //displaying "fs" module function


console.log("starting")

// fs.writeFileSync("ap.txt","Hey Boss")  //for writing in a file, & acts as  blocking element to the code i.e. no further execution before it, synchronous nature.

fs.writeFile ("ap2.txt","HEY BOSS0 ji",()=>{
    console.log("done")  //asynchronous nature i.e. proceeds further block of code.
    fs.readFile("ap2.txt",(error,data)=>{   //reading file
        console.log(error,data.toString())
    })
})

console.log("ending")

//appending in file 
fs.appendFile("ap2.txt","don",(e,d)=>{
    console.log(d)
})
