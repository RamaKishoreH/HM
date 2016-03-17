//-- added comments
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine' , 'ejs');

//-- path for static files
app.use(express.static(path.join(__dirname, 'public')));

//-- path for static files
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/' , function(req , res) {
  res.render('home');
});

app.listen(3000 , function() {
  console.log('server is ready....');
});
