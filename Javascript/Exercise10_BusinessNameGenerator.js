/*create a Business Name Generator by combining list of adjectives and shop name and another word .

Adjectives:
Crazy,
Amazing,
Fire

Shop Names:
Engine,
Foods,
Garments

Another word:
Bros,
Limited,
Hub

*/

console.log("Random Business Name Generator")
//generate 3 different random number for the different combinations.

let rand1=Math.random()
//dividing the randomly generated number into 3 parts: 0-0.33,0.33-0.66,0.66-1.00

let first,second,third;

//Generating  the first word
if(rand1<0.33){
    first="Crazy"
}
else if(rand1>=0.33 && rand1<0.66){
    first="Amazing"
}
else{
    first="Fire"
}

let rand2=Math.random()
//Generating  the second word
if(rand2<0.33){
    second="Engine"
}
else if(rand2>=0.33 && rand2<0.66){
    second="Foods"
}
else{
    second="Garments"
}

let rand3=Math.random()
//Generating  the third word
if(rand3<0.33){
    third="Bros"
}
else if(rand3>=0.33 && rand3<0.66){
    third="Limited"
}
else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)