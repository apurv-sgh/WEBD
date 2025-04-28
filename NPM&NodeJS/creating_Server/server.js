//console.log("Hello ji")
//NOTE:This is Stand alone JS as it does run on backend.

//Slugify is a function that converts a string into a URL-friendly format. It replaces spaces and special characters with hyphens or underscores, and removes any characters that aren't alphanumeric.
var slugify = require('slugify')

let a=slugify('some str@$ #ing')//by default '-' used as separator here.
console.log(a)

// if you prefer something other than '-' as separator:
const b=slugify('some str7897699#%#^*&()ing', '_')
console.log(b)



//to declare/create a npm project with package.json:
//  npm init -y  or  npm init 

//npm install package_name  or npm i package_name :to install package into your project
//npm i --global package_name

//nodemon file_name :to run the live server
//to close multiple node.js file for error crashed: taskkill /F /IM node.exe