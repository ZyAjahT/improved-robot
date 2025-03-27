var express = require('express'); 
var app = express(); 
var bodyParser = require("body-parser");
const path = require('path');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({encoded: false}));

var tasks = ["create to do list", "add items"]

app.get('/', function(req, res){
    res.render('index', {tasks: tasks || []});
})

app.post('/add', function(req, res){
    tasks.push(req.body.newTask)
    res.redirect('/'); 
})

app.listen(3000, function(){
    console.log('Our app is running on port 3000');
})

