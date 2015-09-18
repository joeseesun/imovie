var express = require('experss');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('views engin', 'jade');
app.listen(port);


console.log('imovie runing on port ' + port);