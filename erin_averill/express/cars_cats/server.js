var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.sendFile(__dirname + '/static/index.html')
})
app.use(express.static(__dirname + '/static'))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/cars', function(request, response){
	response.render('cars')
})
app.get('/cats', function(request, response){
	response.render('cats');	
})
app.get('/gary', function(request, response){
	var cats = {
		name: "Gary", 
		age: "10000.5", 
		favorite_food: "Small animals", 
		sleep_spots: ["The higher up the better","Inside small bowls"],
		image: "images/large_cat.jpeg"
	};
	response.render('detail', {cats}, index=0);
})
app.get('/ruth', function(request, response){
	var cats = {
		name: "Ruth", 
		age: "0.5", 
		favorite_food: "Human flesh", 
		sleep_spots: ["On a humans face","Inside the fridge"],
		image: "images/small_cat.jpeg"
	};
	response.render('detail', {cats}, index=0);
})
app.get('/spaghetti', function(request, response){
	var cats = {
		name: "Spaghetti", 
		age: "12", 
		favorite_food: "Ice cream", 
		sleep_spots: ["On national television","Cat bed"],
		image: "images/spaghetti_cat.jpeg"
	};
	response.render('detail', {cats}, index=0);
})
app.get('/cars/new', function(request, response){
	response.render('new')
})

app.listen(8000, function(){
	console.log('Listening on port 8000')
})

// 