var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.post('/process', function(req, res){
	req.session.name = req.body.name;
	req.session.favoritelanguage = req.body.favoritelanguage;
	req.session.location = req.body.location;
	req.session.comment = req.body.comment;
	console.log('submitting form');
	res.redirect('/result')
});

app.get('/result', function(req, res){
	console.log('Displaying the result');
	res.render('results', {'name': req.session.name, 'favoritelanguage': req.session.favoritelanguage, 'location': req.session.location, 'comment': req.session.comment});
});

app.listen(8000, function(){
	console.log('Listening on port 8000')
});