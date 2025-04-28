 /*Write a program to calculate the factorial of a number using reduce method and for loops in js */ 

//Mehod 1: using reduce
 let num=5
 function factorial(number){
    let arr=Array.from(Array(number+1).keys())    //Array().keys  -> used for creating an array by default number.
    console.log(arr.slice(1))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
 }
 factorial(num)
 

//Method 2: using  for loop
// let number=5
// let fact=1
// function factorial(number){
//     if(number==0){
//         fact=1
//     }
//     for (let i = 1; i <= number; i++) {
//          fact=fact*i;
//     }
//     console.log(fact)
// }
// factorial(number);