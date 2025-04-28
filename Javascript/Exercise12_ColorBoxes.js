let boxes=document.getElementsByClassName("box")
//or let boxes=document.querySelector(".container").children

console.log(boxes)  //returns HTML collections,whixh is not iterable, so convert it into an array using Array.from()


function getrandomcolor(){

    //as we know the color format:rgb(x,y,z), where x/y/z lies between 0-255
    //so as to generate the random colors we have to generate 3 number between 0-255
    /*to generate a random no. in range: ll + Math.random()*(ul-ll)
    where ll-lower limit
          ul-upper limit
    NOTE:use Math.ceil(ll+Math.random()*(ul-ll)) to roundoff
    */

   let val1=Math.ceil(0 + Math.random()* 255);
   let val2=Math.ceil(0 + Math.random()* 255);
   let val3=Math.ceil(0 + Math.random()* 255);
   return ` rgb(${val1}, ${val2}, ${val3})`

 }


Array.from(boxes).forEach(e=>{

    e.style.backgroundColor=getrandomcolor()
    e.style.color=getrandomcolor()
    console.log(e) //prints the element
    
})
