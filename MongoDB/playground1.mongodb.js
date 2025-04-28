
use('DevelopmentDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Learning').insertMany([
  
    {
      "name": "java",
      "user": "apurv",
      "course": "sigma"
    },
    {
      "name": "python",
      "user": "alex",
      "course": "delta"
    },
    {
      "name": "javascript",
      "user": "john",
      "course": "beta"
    },
    {
      "name": "ruby",
      "user": "maria",
      "course": "gamma"
    },
    {
      "name": "c++",
      "user": "david",
      "course": "epsilon"
    },
    {
      "name": "swift",
      "user": "emma",
      "course": "lambda"
    },
    {
      "name": "typescript",
      "user": "noah",
      "course": "theta"
    },
    {
      "name": "html",
      "user": "sophia",
      "course": "kappa"
    },
    {
      "name": "css",
      "user": "olivia",
      "course": "iota"
    },
    {
      "name": "go",
      "user": "michael",
      "course": "zeta"
    }
]);



// Print a message to the output window.
console.log(`Done`);
