const http = require('http')

const server = http.createServer((request, response) => {
	const url = request.url;
	if(url === '/'){
		response.writeHead(200, {'content-type': 'text/html'})
		response.write('<h1>hello world!</h1>')
		response.end()
	} else if(url === '/about'){
		response.writeHead(200, {'content-type': 'text/html'})
		response.write('<h1>about page</h1>')
		response.end()
	}else{
		response.writeHead(404, {'content-type': 'text/html'})
		response.write('<h1>not found! :(</h1>')
		response.end()
	}

})

server.listen(5000)
