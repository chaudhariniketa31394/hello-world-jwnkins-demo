const http = require('http');
const port = process.env.PORT || 5000;


var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   const msg = 'Hello Node!\n'
//   res.end(msg);
// });


app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food", "water"]);
 });

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });
