var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
	else if(request.url === '/bugatti.jpg'){
		fs.readFile('./images/bugatti.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/mini.jpeg'){
		fs.readFile('./images/mini.jpeg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/audi.jpeg'){
		fs.readFile('./images/audi.jpeg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		});
	}
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
	else if(request.url === '/large_cat.jpeg'){
		fs.readFile('./images/large_cat.jpeg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/small_cat.jpeg'){
		fs.readFile('./images/small_cat.jpeg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/spaghetti_cat.jpeg'){
		fs.readFile('./images/spaghetti_cat.jpeg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new') {
        fs.readFile('./views/add_car.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
	else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
});

server.listen(7077);
console.log("Running in localhost at port 7077");