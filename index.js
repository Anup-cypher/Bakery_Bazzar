const http = require('http');
const url = require('url');

let server = http.createServer((request, response)=>{
	// console.log(request.url);
	// let qureyObject = url.parse(request.url, true).query;
	// console.log(qureyObject);
	// response.writeHead(200, {'content-type': 'text/html'});
	// response.write(`<html><body><h1>Hello ${qureyObject.name}</h1><p>This is root page. His age is ${qureyObject.age}</p></body></html>`);
	// response.end();
	if(request.url === '/'){
		response.writeHead(200, {'content-type': 'text/html'});
		response.write('<html><body><h1>Hello world</h1><p>This is root page.</p></body></html>');
		response.end();
	}else if(request.url === '/profile'){
		response.writeHead(200, {'content-type': 'text/html'});
		response.write('<html><body><h1>Hello IIMS.</h1><p>This is profile page.</p></body></html>');
		response.end();

	}

	else{
		response.writeHead(404, {'content-type': 'text/html'});
		response.write('<html><body><h1>404 page not found.</h1></body></html>');
		response.end();
	}

});

server.listen(8000);
console.log('server is running on port ', 8000);