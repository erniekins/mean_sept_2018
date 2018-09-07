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
	if('count' in req.session){
		req.session.count ++;
	}
	else{req.session.count = 1};
	console.log(req.session.count);
	return res.render('index', {count: req.session.count});
});

app.post('/add_two', function(req, res){
	req.session.count += 1;
	console.log('Trying to add 2', req.session.count)
	res.redirect('/')
});

app.post('/reset', function(req, res){
	req.session.count = 0;
	console.log('Trying set to one', req.session.count)
	res.redirect('/')
});

app.listen(8000, function(){
	console.log('Listening on port 8000')
});