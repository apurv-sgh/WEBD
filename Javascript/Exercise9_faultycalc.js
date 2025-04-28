/*
Create a faulty calculator using js:
The faulty calculator has following features-
1. It takes two numbers as input from user,
2. It performs wrong operations as follows:
    + --> -
    * --> +
    - --> /
    / -->**

    NOTE: It performs wrong operations only 10% of the times.
*/  


console.log("\t FAULTY CALCULATOR")
let random=Math.random()
console.log(random)
let a=prompt("Enter the first number:")
let c=prompt("Enter the operation you desire to perform:")
let b=prompt("Enter the second number:")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1){
    console.log(`Result=${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    c=obj[c]
    console.log(`Result=${eval(`${a} ${c} ${b}`)}`)

}