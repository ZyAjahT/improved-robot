var express = require('express'); 
var app = express(); 

app.get('/', function(req, res){
    req.send('New Node App');
})

app.listen(3000, function(){
    console.log('Our app is running on port 3000');
})