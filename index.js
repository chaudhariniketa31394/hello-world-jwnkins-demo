// const http = require('http');
// const port = process.env.PORT || 5000;


// var express = require("express");
// var app = express();
// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   const msg = 'Hello Node!\n'
// //   res.end(msg);
// // });


// app.get("/url", (req, res, next) => {
//   res.json(["Tony","Lisa","Michael","Ginger","Food", "water"]);
//  });

// // server.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}/`);
// // });




//importing node framework
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 res.send("hello world");
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;