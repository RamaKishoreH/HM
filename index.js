var express = require('express');
var app = express();

app.get('/' , function(req , res) {
  res.end('xpress server');
});

app.listen(3000 , function() {
  console.log('server is ready....');
});
