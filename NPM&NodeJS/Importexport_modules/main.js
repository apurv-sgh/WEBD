//Named import:
/* import {a, b, d} from "./mymodule.js"
 console.log(a, b, d)*/

//Default import:
/* import ap from "./mymodule.js"
 console.log(ap)*/

/* (function(exports, require, module, __filename, __dirname) {
    // Module code actually lives here
  });*/

const a = require("./mymodule2.js")//through commonJS importing
console.log(a, __dirname, __filename)