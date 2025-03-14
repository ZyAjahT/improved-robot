var express = require('express'); 
var app = express(); 
const path = require('path');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('index', {userName: req.query.userName || 'CPSC'});
//  res.send({"key": "value"});
})

app.get('/name/:userName', function(req, res){
    res.render('index', {userName: req.params.userName});
//  res.send({"key": "value"});
})

app.listen(3000, function(){
    console.log('Our app is running on port 3000');
})